<template>
  <div
    :class="[
      'spr-hidden-scrolls spr-fixed spr-bottom-0 spr-left-0 spr-top-0',
      'spr-background-color spr-w-auto spr-overflow-y-auto spr-overflow-x-hidden',
      'spr-border-color-weak spr-border-b-0 spr-border-l-0 spr-border-r spr-border-t-0 spr-border-solid',
      'spr-transition spr-duration-150 spr-ease-in-out',
    ]"
  >
    <div
      :class="{
        'spr-hidden-scrolls spr-flex spr-h-full spr-flex-col spr-justify-between spr-overflow-auto': true,
        'spr-max-h-[calc(100vh-194px)]': props.notificationCount && props.requestCount,
        'spr-max-h-[calc(100vh-60px)]': !props.notificationCount && !props.requestCount,
        'spr-max-h-[calc(100vh-150px)]':
          (props.notificationCount || props.requestCount) && !(props.notificationCount && props.requestCount),
      }"
    >
      <!-- Top Section -->
      <div class="spr-grid spr-justify-center spr-gap-2 spr-px-3 spr-pb-4 spr-pt-4">
        <!-- Logo -->
        <div
          :class="[
            'spr-grid spr-justify-center spr-p-2',
            '[&>img]:spr-mx-auto [&>img]:spr-h-[24px] [&>img]:spr-w-[24px] [&>img]:spr-object-cover',
          ]"
        >
          <slot name="logo-image" />
        </div>

        <!-- Quick Actions -->
        <Menu
          v-if="props.quickActions && props.quickActions.length > 0"
          v-model:shown="isQuckActionMenuVisible"
          aria-id="quick-action-menu-wrapper"
          distance="18"
          placement="right-start"
          :triggers="[]"
          :popper-hide-triggers="[]"
          instant-move
        >
          <div
            :class="{
              'spr-flex spr-w-full spr-cursor-pointer spr-items-center spr-text-center spr-text-[28px] spr-transition spr-duration-150 spr-ease-in-out': true,
              'hover:spr-brightness-75': true,
              'active:spr-text-color-success-pressed active:spr-scale-90': true,
              'spr-text-color-inverted-disabled spr-rotate-180': isQuckActionMenuVisible,
              'spr-text-color-brand-base': !isQuckActionMenuVisible,
            }"
            @click="isQuckActionMenuVisible = !isQuckActionMenuVisible"
          >
            <Icon icon="ph:plus-circle-fill" class="spr-w-full" />
          </div>

          <template #popper>
            <div
              :class="[
                'spr-px-4 spr-py-3',
                'spr-border-color-weak spr-flex spr-justify-between spr-border-x-0 spr-border-b spr-border-t-0 spr-border-solid',
              ]"
            >
              <h3 class="spr-body-sm-regular-medium spr-m-0">Quick Actions</h3>
              <Icon
                icon="ph:x"
                :class="[
                  'spr-text-color-weak spr-h-[20px] spr-w-[20px] spr-cursor-pointer',
                  'spr-transition spr-duration-150 spr-ease-in-out',
                  'active:spr-scale-90',
                ]"
                @click="isQuckActionMenuVisible = !isQuckActionMenuVisible"
              />
            </div>

            <div class="spr-max-h-[268px] spr-overflow-auto">
              <template v-for="(quickAction, quickActionIndex) in props.quickActions" :key="quickActionIndex">
                <h5
                  v-if="quickAction.menuHeading"
                  :class="[
                    {
                      'spr-label-xs-medium spr-text-color-supporting spr-m-0 spr-p-2': true,
                      'spr-mt-3': quickActionIndex !== 0,
                    },
                  ]"
                >
                  {{ quickAction.menuHeading }}
                </h5>
                <template v-for="(menuLinkItem, menuLinkItemIndex) in quickAction.items" :key="menuLinkItemIndex">
                  <div
                    v-if="!menuLinkItem.hidden"
                    :class="[
                      'spr-flex spr-cursor-pointer spr-gap-2 spr-px-4 spr-py-3 spr-align-middle spr-duration-150 spr-ease-in-out',
                      'hover:spr-background-color-hover',
                      'active:spr-background-color-pressed',
                    ]"
                    @click="handleRedirect(menuLinkItem, '', '', '')"
                  >
                    <div
                      :class="{
                        'spr-flex spr-items-center spr-rounded-border-radius-md spr-p-2': true,
                        'spr-border spr-border-solid spr-border-kangkong-400 spr-bg-kangkong-50 spr-text-kangkong-800':
                          menuLinkItem.iconBgColor === 'green',
                        'spr-border spr-border-solid spr-border-ubas-400 spr-bg-ubas-50 spr-text-ubas-800':
                          menuLinkItem.iconBgColor === 'purple',
                      }"
                    >
                      <Icon
                        v-if="menuLinkItem.icon"
                        :icon="menuLinkItem.icon"
                        class="spr-h-[1em] spr-w-[1em] spr-text-[20px]"
                      />
                    </div>
                    <div class="spr-grid spr-justify-between">
                      <h5 class="spr-body-sm-regular-medium spr-text-color-strong spr-m-0 spr-truncate">
                        {{ menuLinkItem.title }}
                      </h5>
                      <p class="spr-body-xs-regular spr-text-color-base spr-m-0 spr-truncate">
                        {{ menuLinkItem.description }}
                      </p>
                    </div>
                  </div>
                </template>
              </template>
            </div>
          </template>
        </Menu>

        <!-- Search -->
        <div
          v-if="props.hasSearch"
          :class="[
            'spr-flex spr-cursor-pointer spr-items-center spr-justify-center spr-rounded-border-radius-md spr-p-2 spr-transition spr-duration-150 spr-ease-in-out',
            'hover:spr-background-color-hover',
            'active:spr-background-color-single-active active:spr-scale-90',
            'spr-max-w-9 spr-max-h-9 spr-m-auto spr-box-border',
          ]"
          @click="emit('search', 'search-triggered')"
        >
          <Icon icon="ph:magnifying-glass" class="spr-h-[1.25em] spr-w-[1.25em]"/>
        </div>

        <!-- Grouped Nav Links -->
        <template v-for="(navLink, navLinkIndex) in props.navLinks.top" :key="navLinkIndex">
          <template v-for="(parentLink, parentLinkIndex) in navLink.parentLinks" :key="parentLinkIndex">
            <!-- Parent link with menu links -->
            <template v-if="parentLink.menuLinks && parentLink.menuLinks.length > 0">
              <Menu
                aria-id="sidenav-menu-wrapper"
                distance="18"
                placement="right"
                :triggers="['click', 'hover']"
                instant-move
              >
                <div
                  :class="{
                    'spr-flex spr-cursor-pointer spr-items-center spr-justify-center spr-rounded-border-radius-md spr-p-2 spr-transition spr-duration-150 spr-ease-in-out spr-max-w-9 spr-max-h-9 spr-m-auto spr-box-border': true,
                    'spr-background-color-single-active spr-border-color-brand-base spr-border-[1.5px] spr-border-solid active:spr-scale-90':
                      props.activeNav.parentNav === parentLink.title,
                    'hover:spr-background-color-hover': props.activeNav.parentNav != parentLink.title,
                    'active:spr-background-color-single-active active:spr-scale-90': true,
                  }"
                >
                  <Icon v-if="parentLink.icon && props.activeNav.parentNav !== parentLink.title" :icon="parentLink.icon" class="spr-h-[1.25em] spr-w-[1.25em]" />
                  <Icon v-else-if="props.activeNav.parentNav === parentLink.title" :icon="`${parentLink.icon}-fill`" class="spr-text-kangkong-700 spr-h-[1.25em] spr-w-[1.25em]" />
                  <Icon v-else icon="ph:globe" />
                </div>

                <template #popper>
                  <div
                    class="spr-border-color-weak spr-border-x-0 spr-border-b spr-border-t-0 spr-border-solid spr-p-2"
                  >
                    <h3 class="spr-body-sm-regular-medium spr-m-0">
                      {{ parentLink.title }}
                    </h3>
                  </div>

                  <template v-for="(menuLink, menuLinkIndex) in parentLink.menuLinks" :key="menuLinkIndex">
                    <h5
                      v-if="menuLink.menuHeading"
                      :class="{
                        'spr-label-xs-medium spr-text-color-supporting spr-m-0 spr-p-2': true,
                        'spr-mt-2': menuLinkIndex !== 0,
                      }"
                    >
                      {{ menuLink.menuHeading }}
                    </h5>

                    <template v-for="(menuLinkItem, menuLinkItemIndex) in menuLink.items" :key="menuLinkItemIndex">
                      <!-- Menu link with submenu links -->
                      <template v-if="menuLinkItem.submenuLinks && menuLinkItem.submenuLinks.length > 0">
                        <Menu
                          aria-id="sidenav-submenu-wrapper"
                          distance="4"
                          placement="right-start"
                          :triggers="['click', 'hover']"
                          instant-move
                        >
                          <div
                            :class="{
                              'spr-body-sm-regular spr-relative spr-m-0 spr-flex spr-cursor-pointer spr-justify-between spr-px-2 spr-py-1.5 spr-align-middle spr-duration-150 spr-ease-in-out': true,
                              'spr-background-color-single-active': props.activeNav.menu === menuLinkItem.title,
                              'hover:spr-background-color-hover': props.activeNav.menu !== menuLinkItem.title,
                              'active:spr-background-color-pressed': true,
                            }"
                          >
                            <div
                              v-if="props.activeNav.menu === menuLinkItem.title"
                              class="spr-background-color-brand-base spr-absolute spr-left-0 spr-top-0 spr-h-full spr-w-[2px]"
                            ></div>
                            <span>{{ menuLinkItem.title }}</span>
                            <Icon
                              icon="ph:caret-right"
                              class="spr-h-[16px] spr-w-[16px] spr-transform spr-font-normal spr-transition-transform spr-duration-300"
                            />
                          </div>

                          <template #popper>
                            <template
                              v-for="(submenuLink, submenuLinkIndex) in menuLinkItem.submenuLinks"
                              :key="submenuLinkIndex"
                            >
                              <h5
                                v-if="submenuLink.subMenuHeading"
                                :class="{
                                  'spr-label-xs-medium spr-text-color-supporting spr-m-0 spr-p-2': true,
                                  'spr-mt-2': submenuLinkIndex !== 0,
                                }"
                              >
                                {{ submenuLink.subMenuHeading }}
                              </h5>
                              <template
                                v-for="(submenuLinkItem, submenuLinkItemIndex) in submenuLink.items"
                                :key="submenuLinkItemIndex"
                              >
                                <Menu aria-id="sidenav-sub-submenu-wrapper" :triggers="['click', 'hover']" instant-move>
                                  <div
                                    v-if="!submenuLinkItem.hidden"
                                    :class="{
                                      'spr-body-sm-regular spr-relative spr-m-0 spr-flex spr-cursor-pointer spr-justify-between spr-px-2 spr-py-1.5 spr-align-middle spr-duration-150 spr-ease-in-out': true,
                                      'spr-background-color-single-active':
                                        props.activeNav.submenu === submenuLinkItem.title,
                                      'hover:spr-background-color-hover':
                                        props.activeNav.submenu !== submenuLinkItem.title,
                                      'active:spr-background-color-pressed': true,
                                    }"
                                    @click="
                                      handleRedirect(
                                        submenuLinkItem,
                                        parentLink.title,
                                        menuLinkItem.title,
                                        submenuLinkItem.title,
                                      )
                                    "
                                  >
                                    <div
                                      v-show="props.activeNav.submenu === submenuLinkItem.title"
                                      class="spr-background-color-brand-base spr-absolute spr-left-0 spr-top-0 spr-h-full spr-w-[2px]"
                                    ></div>
                                    <span>{{ submenuLinkItem.title }}</span>
                                  </div>
                                </Menu>
                              </template>
                            </template>
                          </template>
                        </Menu>
                      </template>

                      <!-- Menu link only -->
                      <template v-else>
                        <div
                          v-if="!menuLinkItem.hidden"
                          :class="{
                            'spr-body-sm-regular spr-relative spr-m-0 spr-flex spr-cursor-pointer spr-justify-between spr-px-2 spr-py-1.5 spr-align-middle spr-duration-150 spr-ease-in-out': true,
                            'spr-background-color-single-active': props.activeNav.menu === menuLinkItem.title,
                            'hover:spr-background-color-hover': props.activeNav.menu !== menuLinkItem.title,
                            'active:spr-background-color-pressed': true,
                          }"
                          @click="handleRedirect(menuLinkItem, parentLink.title, menuLinkItem.title, '')"
                        >
                          <span>{{ menuLinkItem.title }}</span>
                        </div>
                      </template>
                    </template>
                  </template>
                </template>
              </Menu>
            </template>

            <!-- Parent link only  -->
            <template v-else>
              <Tooltip
                v-if="!parentLink.hidden"
                aria-id="sidenav-tooltip-wrapper"
                placement="right"
                distance="18"
                :triggers="['hover']"
              >
                <template #popper>
                  <span class="spr-label-xs-medium spr-uppercase">{{ parentLink.title }}</span>
                </template>
                <div
                  :class="{
                    'spr-flex spr-cursor-pointer spr-items-center spr-justify-center spr-rounded-border-radius-md spr-p-2 spr-transition spr-duration-150 spr-ease-in-out spr-max-w-9 spr-max-h-9 spr-m-auto spr-box-border': true,
                    'spr-background-color-single-active spr-border-color-brand-base spr-border-[1.5px] spr-border-solid active:spr-scale-90':
                      props.activeNav.parentNav === parentLink.title,
                    'hover:spr-background-color-hover': props.activeNav.parentNav != parentLink.title,
                    'active:spr-background-color-single-active active:spr-scale-90': true,
                  }"
                  @click="handleRedirect(parentLink, parentLink.title, '', '')"
                >
                  <Icon v-if="parentLink.icon && props.activeNav.parentNav !== parentLink.title" :icon="parentLink.icon" class="spr-h-[1.25em] spr-w-[1.25em]" />
                  <Icon v-else-if="props.activeNav.parentNav === parentLink.title" :icon="`${parentLink.icon}-fill`" class="spr-text-kangkong-700 spr-h-[1.25em] spr-w-[1.25em]" />
                  <Icon v-else icon="ph:globe" />
                </div>
              </Tooltip>
            </template>
          </template>
          <div
            v-if="props.navLinks.top.length > 0 && navLinkIndex < props.navLinks.top.length - 1"
            class="spr-background-color-hover spr-h-[2px] spr-w-full"
          ></div>
        </template>
      </div>

      <!-- Bottom Section -->
      <div
        v-if="props.navLinks.bottom && props.navLinks.bottom.length > 0"
        class="spr-grid spr-justify-center spr-gap-2 spr-px-3 spr-pb-4 spr-pt-0"
      >
        <!-- Grouped Nav Links -->
        <template v-for="(navLink, navLinkIndex) in props.navLinks.bottom" :key="navLinkIndex">
          <template v-for="(parentLink, parentLinkIndex) in navLink.parentLinks" :key="parentLinkIndex">
            <!-- Parent link with menu links -->
            <template v-if="parentLink.menuLinks && parentLink.menuLinks.length > 0">
              <Menu
                aria-id="sidenav-menu-wrapper"
                distance="18"
                placement="right"
                :triggers="['click', 'hover']"
                instant-move
              >
                <div
                  :class="{
                    'spr-flex spr-cursor-pointer spr-items-center spr-justify-center spr-rounded-border-radius-md spr-p-2 spr-transition spr-duration-150 spr-ease-in-out spr-max-w-9 spr-max-h-9 spr-m-auto spr-box-border': true,
                    'spr-background-color-single-active spr-border-color-brand-base spr-border-[1.5px] spr-border-solid active:spr-scale-90':
                      props.activeNav.parentNav === parentLink.title,
                    'hover:spr-background-color-hover': props.activeNav.parentNav != parentLink.title,
                    'active:spr-background-color-single-active active:spr-scale-90': true,
                  }"
                >
                  <Icon v-if="parentLink.icon && props.activeNav.parentNav !== parentLink.title" :icon="parentLink.icon" class="spr-h-[1.25em] spr-w-[1.25em]" />
                  <Icon v-else-if="props.activeNav.parentNav === parentLink.title" :icon="`${parentLink.icon}-fill`" class="spr-text-kangkong-700 spr-h-[1.25em] spr-w-[1.25em]" />
                  <Icon v-else icon="ph:globe" />
                </div>

                <template #popper>
                  <div
                    class="spr-border-color-weak spr-border-x-0 spr-border-b spr-border-t-0 spr-border-solid spr-p-2"
                  >
                    <h3 class="spr-body-sm-regular-medium spr-m-0">
                      {{ parentLink.title }}
                    </h3>
                  </div>

                  <template v-for="(menuLink, menuLinkIndex) in parentLink.menuLinks" :key="menuLinkIndex">
                    <h5
                      v-if="menuLink.menuHeading"
                      :class="{
                        'spr-label-xs-medium spr-text-color-supporting spr-m-0 spr-p-2': true,
                        'spr-mt-3': menuLinkIndex !== 0,
                      }"
                    >
                      {{ menuLink.menuHeading }}
                    </h5>

                    <template v-for="(menuLinkItem, menuLinkItemIndex) in menuLink.items" :key="menuLinkItemIndex">
                      <!-- Menu link with submenu links -->
                      <template v-if="menuLinkItem.submenuLinks && menuLinkItem.submenuLinks.length > 0">
                        <Menu
                          aria-id="sidenav-submenu-wrapper"
                          distance="4"
                          placement="right-start"
                          :triggers="['click', 'hover']"
                          instant-move
                        >
                          <div
                            :class="{
                              'spr-body-sm-regular spr-relative spr-m-0 spr-flex spr-cursor-pointer spr-justify-between spr-px-2 spr-py-1.5 spr-align-middle spr-duration-150 spr-ease-in-out': true,
                              'spr-background-color-single-active': props.activeNav.menu === menuLinkItem.title,
                              'hover:spr-background-color-hover': props.activeNav.menu !== menuLinkItem.title,
                              'active:spr-background-color-pressed': true,
                            }"
                          >
                            <div
                              v-if="props.activeNav.menu === menuLinkItem.title"
                              class="spr-background-color-brand-base spr-absolute spr-left-0 spr-top-0 spr-h-full spr-w-[2px]"
                            ></div>
                            <span>{{ menuLinkItem.title }}</span>
                            <Icon
                              icon="ph:caret-right"
                              class="spr-h-[16px] spr-w-[16px] spr-transform spr-font-normal spr-transition-transform spr-duration-300"
                            />
                          </div>

                          <template #popper>
                            <template
                              v-for="(submenuLink, submenuLinkIndex) in menuLinkItem.submenuLinks"
                              :key="submenuLinkIndex"
                            >
                              <h5
                                v-if="submenuLink.subMenuHeading"
                                :class="{
                                  'spr-label-xs-medium spr-text-color-supporting spr-m-0 spr-p-2': true,
                                  'spr-mt-3': submenuLinkIndex !== 0,
                                }"
                              >
                                {{ submenuLink.subMenuHeading }}
                              </h5>
                              <template
                                v-for="(submenuLinkItem, submenuLinkItemIndex) in submenuLink.items"
                                :key="submenuLinkItemIndex"
                              >
                                <Menu aria-id="sidenav-sub-submenu-wrapper" :triggers="['click', 'hover']" instant-move>
                                  <div
                                    v-if="!submenuLinkItem.hidden"
                                    :class="{
                                      'spr-body-sm-regular spr-relative spr-m-0 spr-flex spr-cursor-pointer spr-justify-between spr-px-2 spr-py-1.5 spr-align-middle spr-duration-150 spr-ease-in-out': true,
                                      'spr-background-color-single-active':
                                        props.activeNav.submenu === submenuLinkItem.title,
                                      'hover:spr-background-color-hover':
                                        props.activeNav.submenu !== submenuLinkItem.title,
                                      'active:spr-background-color-pressed': true,
                                    }"
                                    @click="
                                      handleRedirect(
                                        submenuLinkItem,
                                        parentLink.title,
                                        menuLinkItem.title,
                                        submenuLinkItem.title,
                                      )
                                    "
                                  >
                                    <div
                                      v-show="props.activeNav.submenu === submenuLinkItem.title"
                                      class="spr-background-color-brand-base spr-absolute spr-left-0 spr-top-0 spr-h-full spr-w-[2px]"
                                    ></div>
                                    <span>{{ submenuLinkItem.title }}</span>
                                  </div>
                                </Menu>
                              </template>
                            </template>
                          </template>
                        </Menu>
                      </template>

                      <!-- Menu link only -->
                      <template v-else>
                        <div
                          v-if="!menuLinkItem.hidden"
                          :class="[
                            'spr-body-sm-regular spr-m-0 spr-flex spr-cursor-pointer spr-justify-between spr-px-2 spr-py-1.5 spr-align-middle spr-duration-300 spr-ease-in-out',
                            'hover:spr-background-color-hover',
                            'active:spr-background-color-pressed',
                            'last:spr-rounded-b-xl',
                          ]"
                          @click="handleRedirect(menuLinkItem, parentLink.title, menuLinkItem.title, '')"
                        >
                          <span>{{ menuLinkItem.title }}</span>
                        </div>
                      </template>
                    </template>
                  </template>
                </template>
              </Menu>
            </template>

            <!-- Parent link only  -->
            <template v-else>
              <Tooltip
                v-if="!parentLink.hidden"
                aria-id="sidenav-tooltip-wrapper"
                placement="right"
                distance="18"
                :triggers="['hover']"
              >
                <template #popper>
                  <span class="spr-label-xs-medium spr-uppercase">{{ parentLink.title }}</span>
                </template>
                <div
                  :class="{
                    'spr-flex spr-cursor-pointer spr-items-center spr-justify-center spr-rounded-border-radius-md spr-p-2 spr-transition spr-duration-150 spr-ease-in-out spr-max-w-9 spr-max-h-9 spr-m-auto spr-box-border': true,
                    'spr-background-color-single-active spr-border-color-brand-base spr-border-[1.5px] spr-border-solid active:spr-scale-90':
                      props.activeNav.parentNav === parentLink.title,
                    'hover:spr-background-color-hover': props.activeNav.parentNav != parentLink.title,
                    'active:spr-background-color-single-active active:spr-scale-90': true,
                  }"
                  @click="handleRedirect(parentLink, parentLink.title, '', '')"
                >
                  <Icon v-if="parentLink.icon && props.activeNav.parentNav !== parentLink.title" :icon="parentLink.icon" class="spr-h-[1.25em] spr-w-[1.25em]" />
                  <Icon v-else-if="props.activeNav.parentNav === parentLink.title" :icon="`${parentLink.icon}-fill`" class="spr-text-kangkong-700 spr-h-[1.25em] spr-w-[1.25em]" />
                  <Icon v-else icon="ph:globe" />
                </div>
              </Tooltip>
            </template>
          </template>
          <div
            v-if="props.navLinks.bottom.length > 0 && navLinkIndex < props.navLinks.bottom.length - 1"
            class="spr-background-color-hover spr-h-[2px] spr-w-full"
          ></div>
        </template>
      </div>
    </div>

    <div v-if="props.notificationCount || props.requestCount" class="spr-grid spr-gap-2 spr-py-6">
      <!-- Notification -->
      <Tooltip
        aria-id="sidenav-tooltip-wrapper"
        placement="right"
        distance="18"
        :triggers="['hover']"
      >
        <template #popper>
          <span class="spr-label-xs-medium spr-uppercase">NOTIFICATIONS</span>
        </template>
        <div
          v-if="props.notificationCount"
          :class="[
            'spr-relative spr-flex spr-cursor-pointer spr-items-center spr-justify-center p-2',
            'spr-transition spr-duration-150 spr-ease-in-out',
            'active:spr-scale-90',
          ]"
          @click="emit('notifications', 'notifications-triggered')"
        >
          <Icon icon="ph:bell" class="spr-h-[1.25em] spr-w-[1.25em]" />
          <spr-badge
            class="spr-absolute -spr-top-0.5 spr-right-2.5"
            :text="String(props.notificationCount)"
            variant="danger"
            size="small"
          />
        </div>
      </Tooltip>

      <!-- Requests -->
      <Tooltip
        aria-id="sidenav-tooltip-wrapper"
        placement="right"
        distance="18"
        :triggers="['hover']"
      >
        <template #popper>
          <span class="spr-label-xs-medium spr-uppercase">REQUESTS</span>
        </template>
        <div
          v-if="props.requestCount"
          :class="[
            'spr-relative spr-flex spr-cursor-pointer spr-items-center spr-justify-center spr-p-2',
            'spr-transition spr-duration-150 spr-ease-in-out',
            'active:spr-scale-90',
          ]"
          @click="emit('requests', 'requests-triggered')"
        >
          <Icon icon="ph:check-square" class="spr-h-[1.25em] spr-w-[1.25em]" />
          <spr-badge
            class="spr-absolute -spr-top-0.5 spr-right-2.5"
            :text="String(props.requestCount)"
            variant="danger"
            size="small"
          />
        </div>
      </Tooltip>
    </div>

    <!-- Avatar -->
    <div
      v-if="props.userMenu"
      :class="[
        'spr-border-color-weak spr-absolute spr-bottom-0 spr-p-3.5',
        'spr-border-b-0 spr-border-l-0 spr-border-r-0 spr-border-t spr-border-solid',
        'spr-flex spr-justify-center',
      ]"
    >
      <Menu
        v-model:shown="isUserMenuVisible"
        aria-id="user-menu-wrapper"
        distance="1"
        placement="right"
        :triggers="['click', 'hover']"
        instant-move
      >
        <div
          :class="[
            'spr-background-color spr-flex spr-h-[36px] spr-w-[36px] spr-cursor-pointer spr-items-center spr-justify-center spr-rounded-full',
            'spr-border-color-weak spr-border spr-border-solid',
            'spr-transition spr-duration-150 spr-ease-in-out',
            'hover:spr-background-color-hover',
            'active:spr-background-color-pressed active:spr-scale-90',
            '[&>img]:spr-h-[36px] [&>img]:spr-w-[36px] [&>img]:spr-rounded-full [&>img]:spr-object-cover',
          ]"
          @click="isUserMenuVisible = !isUserMenuVisible"
        >
          <template v-if="props.userMenu.profileImage && !userProfileError">
            <img :src="props.userMenu.profileImage" alt="profile-image" @error="userProfileError = true" />
          </template>
          <template v-else>
            <span>{{ getUserInitials(props.userMenu.name) }}</span>
          </template>
        </div>

        <template #popper>
          <div
            :class="[
              'spr-px-2 spr-py-2',
              'spr-border-color-weak spr-flex spr-justify-between spr-border-x-0 spr-border-b spr-border-t-0 spr-border-solid',
            ]"
          >
            <div class="spr-flex spr-items-center spr-gap-2">
              <div
                :class="[
                  'spr-background-color spr-flex spr-h-[36px] spr-w-[36px] spr-items-center spr-justify-center spr-rounded-full',
                  'spr-border-color-weak spr-border spr-border-solid',
                  '[&>img]:spr-h-[36px] [&>img]:spr-w-[36px] [&>img]:spr-rounded-full [&>img]:spr-object-cover',
                ]"
              >
                <template v-if="props.userMenu.profileImage && !userProfileError">
                  <img :src="props.userMenu.profileImage" alt="profile-image" @error="userProfileError = true" />
                </template>
                <template v-else>
                  <span>{{ getUserInitials(props.userMenu.name) }}</span>
                </template>
              </div>
              <div class="spr-grid spr-justify-between spr-gap-1">
                <h3 class="spr-body-sm-regular spr-m-0 spr-truncate">
                  {{ props.userMenu.name }}
                </h3>
                <p class="spr-body-xs-regular spr-m-0 spr-truncate spr-text-color-supporting">
                  {{ props.userMenu.email }}
                </p>
              </div>
            </div>
          </div>

          <div class="spr-max-h-[268px] spr-overflow-auto">
            <template v-for="(userMenuItem, userMenuItemIndex) in props.userMenu.items" :key="userMenuItemIndex">
              <div
                v-if="!userMenuItem.hidden"
                :class="[
                  'spr-flex spr-cursor-pointer spr-gap-2 spr-p-2 spr-align-middle spr-duration-150 spr-ease-in-out',
                  'hover:spr-background-color-hover',
                  'active:spr-background-color-pressed spr-bg-red',
                  'last-of-type:spr-border-t last-of-type:spr-border-solid last-of-type:spr-border-0 last-of-type:spr-border-color-weak'
                ]"
                @click="handleRedirect(userMenuItem, '', '', '')"
              >
                <Icon
                  v-if="userMenuItem.icon"
                  :icon="userMenuItem.icon"
                  class="spr-h-[1em] spr-w-[1em] spr-text-[20px]"
                />
                <h5 class="spr-body-sm-regular spr-text-color-strong spr-m-0 spr-truncate">
                  {{ userMenuItem.title }}
                </h5>
              </div>
            </template>
          </div>
        </template>
      </Menu>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Menu, Tooltip } from 'floating-vue';
import { Icon } from '@iconify/vue';

import 'floating-vue/dist/style.css';

import { sidenavPropTypes, sidenavEmitTypes } from './sidenav';
import { useSidenav } from './use-sidenav';

import SprBadge from '../badge/badge.vue';

const props = defineProps(sidenavPropTypes);
const emit = defineEmits(sidenavEmitTypes);

const { isQuckActionMenuVisible, isUserMenuVisible, userProfileError, getUserInitials, handleRedirect } = useSidenav(
  props,
  emit,
);
</script>
