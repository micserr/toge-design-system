import { ref, computed, watch, onMounted } from 'vue';
import type { SliderPropTypes } from './slider.ts';

export const useSlider = (props: SliderPropTypes, emit: (event: 'update:modelValue', value: number) => void) => {
  const sliderRef = ref<HTMLElement | null>(null);
  const isDragging = ref(false);
  const sliderValue = ref(props.modelValue);

  const handleSliderSize = computed(() => (props.size === 'sm' ? 'spr-h-1' : 'spr-h-2'));
  const handleSliderThumbSize = computed(() => (props.size === 'sm' ? 'spr-text-base' : 'spr-text-[20px]'));

  const thumbPosition = computed(() => {
    if (props.max === props.min) return '0%';
    const normalizedValue = Math.min(props.max, Math.max(props.min, sliderValue.value));
    return `${((normalizedValue - props.min) / (props.max - props.min)) * 100}%`;
  });

  const updateValue = (newValue: number) => {
    const clampedValue = Math.min(props.max, Math.max(props.min, newValue));
    sliderValue.value = clampedValue;
    emit('update:modelValue', clampedValue);
  };

  const updateValueFromEvent = (event: MouseEvent | TouchEvent) => {
    if (!sliderRef.value) return;

    const rect = sliderRef.value.getBoundingClientRect();
    const clientX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;

    let percentage = (clientX - rect.left) / rect.width;
    percentage = Math.min(1, Math.max(0, percentage));

    let rawValue = props.min + percentage * (props.max - props.min);

    if (props.step > 0) {
      let stepValue = Math.round((rawValue - props.min) / props.step) * props.step + props.min;

      if (stepValue > props.max) stepValue = props.max;
      if (stepValue < props.min) stepValue = props.min;

      if (stepValue + props.step > props.max && rawValue > stepValue) stepValue = props.max;

      rawValue = stepValue;
    }

    updateValue(rawValue);
  };

  const startDrag = (event: PointerEvent) => {
    if (props.disabled) return;
    isDragging.value = true;
    updateValueFromEvent(event);

    const onDrag = (event: PointerEvent) => {
      if (!props.disabled) updateValueFromEvent(event);
    };

    const stopDrag = () => {
      isDragging.value = false;
      window.removeEventListener('pointermove', onDrag);
      window.removeEventListener('pointerup', stopDrag);
    };

    window.addEventListener('pointermove', onDrag);
    window.addEventListener('pointerup', stopDrag);
  };

  const handleKeydown = (event: KeyboardEvent) => {
    if (!sliderRef.value || props.disabled) return;
    if (event.key === 'ArrowRight') updateValue(sliderValue.value + props.step);
    if (event.key === 'ArrowLeft') updateValue(sliderValue.value - props.step);
  };

  onMounted(() => {
    sliderRef.value?.addEventListener('keydown', handleKeydown);
    sliderRef.value?.addEventListener('pointerdown', startDrag);
  });

  watch(
    () => props.modelValue,
    (newVal) => {
      sliderValue.value = newVal;
    },
  );

  const handleThumbStyle = computed(() => {
    return {
      left: thumbPosition.value,
      transition: isDragging.value ? 'none' : 'left 0.15s linear',
      willChange: 'left',
    };
  });

  const handleSliderStyle = computed(() => {
    return {
      width: thumbPosition.value,
      transition: isDragging.value ? 'none' : 'width 0.15s linear',
      willChange: 'width',
    };
  });

  return {
    sliderRef,
    handleSliderSize,
    handleSliderThumbSize,
    startDrag,
    thumbPosition,
    handleThumbStyle,
    handleSliderStyle,
  };
};
