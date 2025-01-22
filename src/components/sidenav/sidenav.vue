<template>
  <div
    :class="[
      'tw-hidden-scrolls tw-fixed tw-bottom-0 tw-left-0 tw-top-0',
      'tw-background-color tw-w-auto tw-overflow-y-auto tw-overflow-x-hidden',
      'tw-border-color-weak tw-border-b-0 tw-border-l-0 tw-border-r tw-border-t-0 tw-border-solid',
      'tw-transition tw-duration-150 tw-ease-in-out',
    ]"
  >
    <div
      :class="{
        'tw-hidden-scrolls tw-flex tw-h-full tw-flex-col tw-justify-between tw-overflow-auto': true,
        'tw-max-h-[calc(100vh-145px)]': props.notificationCount,
        'tw-max-h-[calc(100vh-60px)]': !props.notificationCount,
      }"
    >
      <!-- Top Section -->
      <div class="tw-grid tw-justify-center tw-gap-2 tw-px-3 tw-pb-4 tw-pt-4">
        <!-- Logo -->
        <div
          :class="[
            'tw-grid tw-justify-center tw-p-2',
            '[&>img]:tw-mx-auto [&>img]:tw-h-[24px] [&>img]:tw-w-[24px] [&>img]:tw-object-cover',
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
              'tw-flex tw-w-full tw-cursor-pointer tw-items-center tw-text-center tw-text-[28px] tw-transition tw-duration-150 tw-ease-in-out': true,
              'hover:tw-brightness-75': true,
              'active:tw-text-color-success-pressed active:tw-scale-90': true,
              'tw-text-color-inverted-disabled tw-rotate-180': isQuckActionMenuVisible,
              'tw-text-color-brand-base': !isQuckActionMenuVisible,
            }"
            @click="isQuckActionMenuVisible = !isQuckActionMenuVisible"
          >
            <IconPlusCircleFill class="tw-w-full" />
          </div>

          <template #popper>
            <div
              :class="[
                'tw-px-4 tw-py-3',
                'tw-border-color-weak tw-flex tw-justify-between tw-border-x-0 tw-border-b tw-border-t-0 tw-border-solid',
              ]"
            >
              <h3 class="tw-body-sm-regular-medium tw-m-0">Quick Actions</h3>
              <IconX
                :class="[
                  'tw-text-color-weak tw-h-[20px] tw-w-[20px] tw-cursor-pointer',
                  'tw-transition tw-duration-150 tw-ease-in-out',
                  'active:tw-scale-90',
                ]"
                @click="isQuckActionMenuVisible = !isQuckActionMenuVisible"
              />
            </div>

            <div class="tw-max-h-[268px] tw-overflow-auto">
              <template v-for="(quickAction, quickActionIndex) in props.quickActions" :key="quickActionIndex">
                <h5
                  v-if="quickAction.menuHeading"
                  :class="[
                    {
                      'tw-label-xs-medium tw-text-color-supporting tw-m-0 tw-p-2': true,
                      'tw-mt-3': quickActionIndex !== 0,
                    },
                  ]"
                >
                  {{ quickAction.menuHeading }}
                </h5>
                <template v-for="(menuLinkItem, menuLinkItemIndex) in quickAction.items" :key="menuLinkItemIndex">
                  <div
                    v-if="!menuLinkItem.hidden"
                    :class="[
                      'tw-flex tw-cursor-pointer tw-gap-2 tw-px-4 tw-py-3 tw-align-middle tw-duration-150 tw-ease-in-out',
                      'hover:tw-background-color-hover',
                      'active:tw-background-color-pressed',
                    ]"
                    @click="handleRedirect(menuLinkItem, '', '', '')"
                  >
                    <div
                      :class="{
                        'tw-flex tw-items-center tw-rounded-border-radius-md tw-p-2': true,
                        'tw-border tw-border-solid tw-border-kangkong-400 tw-bg-kangkong-50 tw-text-kangkong-800':
                          menuLinkItem.iconBgColor === 'green',
                        'tw-border tw-border-solid tw-border-ubas-400 tw-bg-ubas-50 tw-text-ubas-800':
                          menuLinkItem.iconBgColor === 'purple',
                      }"
                    >
                      <component
                        :is="menuLinkItem.icon"
                        v-if="menuLinkItem.icon"
                        class="tw-h-[1em] tw-w-[1em] tw-text-[20px]"
                      />
                    </div>
                    <div class="tw-grid tw-justify-between">
                      <h5 class="tw-body-sm-regular-medium tw-text-color-strong tw-m-0 tw-truncate">
                        {{ menuLinkItem.title }}
                      </h5>
                      <p class="tw-body-xs-regular tw-text-color-base tw-m-0 tw-truncate">
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
            'tw-flex tw-cursor-pointer tw-items-center tw-justify-center tw-rounded-border-radius-md tw-p-2 tw-transition tw-duration-150 tw-ease-in-out',
            'hover:tw-background-color-hover',
            'active:tw-background-color-single-active active:tw-scale-90',
          ]"
          @click="emit('search', 'search-triggered')"
        >
          <IconMagnifyingGlass />
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
                    'tw-flex tw-cursor-pointer tw-items-center tw-justify-center tw-rounded-border-radius-md tw-p-2 tw-transition tw-duration-150 tw-ease-in-out': true,
                    'tw-background-color-single-active tw-border-color-brand-base tw-border-[1.5px] tw-border-solid active:tw-scale-90':
                      props.activeNav.parentNav === parentLink.title,
                    'hover:tw-background-color-hover': props.activeNav.parentNav != parentLink.title,
                    'active:tw-background-color-single-active active:tw-scale-90': true,
                  }"
                >
                  <component :is="parentLink.icon" v-if="parentLink.icon" class="tw-h-[1.25em] tw-w-[1.25em]" />
                  <IconGlobe v-else />
                </div>

                <template #popper>
                  <div class="tw-border-color-weak tw-border-x-0 tw-border-b tw-border-t-0 tw-border-solid tw-p-2">
                    <h3 class="tw-body-sm-regular-medium tw-m-0">
                      {{ parentLink.title }}
                    </h3>
                  </div>

                  <template v-for="(menuLink, menuLinkIndex) in parentLink.menuLinks" :key="menuLinkIndex">
                    <h5
                      v-if="menuLink.menuHeading"
                      :class="{
                        'tw-label-xs-medium tw-text-color-supporting tw-m-0 tw-p-2': true,
                        'tw-mt-3': menuLinkIndex !== 0,
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
                              'tw-body-sm-regular tw-relative tw-m-0 tw-flex tw-cursor-pointer tw-justify-between tw-px-2 tw-py-1.5 tw-align-middle tw-duration-150 tw-ease-in-out': true,
                              'tw-background-color-single-active': props.activeNav.menu === menuLinkItem.title,
                              'hover:tw-background-color-hover': props.activeNav.menu !== menuLinkItem.title,
                              'active:tw-background-color-pressed': true,
                            }"
                          >
                            <div
                              v-if="props.activeNav.menu === menuLinkItem.title"
                              class="tw-background-color-brand-base tw-absolute tw-left-0 tw-top-0 tw-h-full tw-w-[2px]"
                            ></div>
                            <span>{{ menuLinkItem.title }}</span>
                            <IconCaretRight
                              class="tw-h-[16px] tw-w-[16px] tw-transform tw-font-normal tw-transition-transform tw-duration-300"
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
                                  'tw-label-xs-medium tw-text-color-supporting tw-m-0 tw-p-2': true,
                                  'tw-mt-3': submenuLinkIndex !== 0,
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
                                      'tw-body-sm-regular tw-relative tw-m-0 tw-flex tw-cursor-pointer tw-justify-between tw-px-2 tw-py-1.5 tw-align-middle tw-duration-150 tw-ease-in-out': true,
                                      'tw-background-color-single-active':
                                        props.activeNav.submenu === submenuLinkItem.title,
                                      'hover:tw-background-color-hover':
                                        props.activeNav.submenu !== submenuLinkItem.title,
                                      'active:tw-background-color-pressed': true,
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
                                      class="tw-background-color-brand-base tw-absolute tw-left-0 tw-top-0 tw-h-full tw-w-[2px]"
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
                            'tw-body-sm-regular tw-m-0 tw-flex tw-cursor-pointer tw-justify-between tw-px-2 tw-py-1.5 tw-align-middle tw-duration-300 tw-ease-in-out',
                            'hover:tw-background-color-hover',
                            'active:tw-background-color-pressed',
                            'last:tw-rounded-b-xl',
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
                aria-id="default-tooltip"
                placement="right"
                distance="18"
                :triggers="['hover']"
              >
                <template #popper>
                  <span class="tw-label-xs-medium tw-uppercase">{{ parentLink.title }}</span>
                </template>
                <div
                  :class="{
                    'tw-flex tw-cursor-pointer tw-items-center tw-justify-center tw-rounded-border-radius-md tw-p-2 tw-transition tw-duration-150 tw-ease-in-out': true,
                    'tw-background-color-single-active tw-border-color-brand-base tw-border-[1.5px] tw-border-solid active:tw-scale-90':
                      props.activeNav.parentNav === parentLink.title,
                    'hover:tw-background-color-hover': props.activeNav.parentNav != parentLink.title,
                    'active:tw-background-color-single-active active:tw-scale-90': true,
                  }"
                  @click="handleRedirect(parentLink, parentLink.title, '', '')"
                >
                  <component :is="parentLink.icon" v-if="parentLink.icon" class="tw-h-[1.25em] tw-w-[1.25em]" />
                  <IconGlobe v-else />
                </div>
              </Tooltip>
            </template>
          </template>
          <div
            v-if="props.navLinks.top.length > 0 && navLinkIndex < props.navLinks.top.length - 1"
            class="tw-background-color-hover tw-h-[2px] tw-w-full"
          ></div>
        </template>
      </div>

      <!-- Bottom Section -->
      <div
        v-if="props.navLinks.bottom && props.navLinks.bottom.length > 0"
        class="tw-grid tw-justify-center tw-gap-2 tw-px-3 tw-pb-4 tw-pt-0"
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
                    'tw-flex tw-cursor-pointer tw-items-center tw-justify-center tw-rounded-border-radius-md tw-p-2 tw-transition tw-duration-150 tw-ease-in-out': true,
                    'tw-background-color-single-active tw-border-color-brand-base tw-border-[1.5px] tw-border-solid active:tw-scale-90':
                      props.activeNav.parentNav === parentLink.title,
                    'hover:tw-background-color-hover': props.activeNav.parentNav != parentLink.title,
                    'active:tw-background-color-single-active active:tw-scale-90': true,
                  }"
                >
                  <component :is="parentLink.icon" v-if="parentLink.icon" class="tw-h-[1.25em] tw-w-[1.25em]" />
                  <IconGlobe v-else />
                </div>

                <template #popper>
                  <div class="tw-border-color-weak tw-border-x-0 tw-border-b tw-border-t-0 tw-border-solid tw-p-2">
                    <h3 class="tw-body-sm-regular-medium tw-m-0">
                      {{ parentLink.title }}
                    </h3>
                  </div>

                  <template v-for="(menuLink, menuLinkIndex) in parentLink.menuLinks" :key="menuLinkIndex">
                    <h5
                      v-if="menuLink.menuHeading"
                      :class="{
                        'tw-label-xs-medium tw-text-color-supporting tw-m-0 tw-p-2': true,
                        'tw-mt-3': menuLinkIndex !== 0,
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
                              'tw-body-sm-regular tw-relative tw-m-0 tw-flex tw-cursor-pointer tw-justify-between tw-px-2 tw-py-1.5 tw-align-middle tw-duration-150 tw-ease-in-out': true,
                              'tw-background-color-single-active': props.activeNav.menu === menuLinkItem.title,
                              'hover:tw-background-color-hover': props.activeNav.menu !== menuLinkItem.title,
                              'active:tw-background-color-pressed': true,
                            }"
                          >
                            <div
                              v-if="props.activeNav.menu === menuLinkItem.title"
                              class="tw-background-color-brand-base tw-absolute tw-left-0 tw-top-0 tw-h-full tw-w-[2px]"
                            ></div>
                            <span>{{ menuLinkItem.title }}</span>
                            <IconCaretRight
                              class="tw-h-[16px] tw-w-[16px] tw-transform tw-font-normal tw-transition-transform tw-duration-300"
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
                                  'tw-label-xs-medium tw-text-color-supporting tw-m-0 tw-p-2': true,
                                  'tw-mt-3': submenuLinkIndex !== 0,
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
                                      'tw-body-sm-regular tw-relative tw-m-0 tw-flex tw-cursor-pointer tw-justify-between tw-px-2 tw-py-1.5 tw-align-middle tw-duration-150 tw-ease-in-out': true,
                                      'tw-background-color-single-active':
                                        props.activeNav.submenu === submenuLinkItem.title,
                                      'hover:tw-background-color-hover':
                                        props.activeNav.submenu !== submenuLinkItem.title,
                                      'active:tw-background-color-pressed': true,
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
                                      class="tw-background-color-brand-base tw-absolute tw-left-0 tw-top-0 tw-h-full tw-w-[2px]"
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
                            'tw-body-sm-regular tw-m-0 tw-flex tw-cursor-pointer tw-justify-between tw-px-2 tw-py-1.5 tw-align-middle tw-duration-300 tw-ease-in-out',
                            'hover:tw-background-color-hover',
                            'active:tw-background-color-pressed',
                            'last:tw-rounded-b-xl',
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
                aria-id="default-tooltip"
                placement="right"
                distance="18"
                :triggers="['hover']"
              >
                <template #popper>
                  <span class="tw-label-xs-medium tw-uppercase">{{ parentLink.title }}</span>
                </template>
                <div
                  :class="{
                    'tw-flex tw-cursor-pointer tw-items-center tw-justify-center tw-rounded-border-radius-md tw-p-2 tw-transition tw-duration-150 tw-ease-in-out': true,
                    'tw-background-color-single-active tw-border-color-brand-base tw-border-[1.5px] tw-border-solid active:tw-scale-90':
                      props.activeNav.parentNav === parentLink.title,
                    'hover:tw-background-color-hover': props.activeNav.parentNav != parentLink.title,
                    'active:tw-background-color-single-active active:tw-scale-90': true,
                  }"
                  @click="handleRedirect(parentLink, parentLink.title, '', '')"
                >
                  <component :is="parentLink.icon" v-if="parentLink.icon" class="tw-h-[1.25em] tw-w-[1.25em]" />
                  <IconGlobe v-else />
                </div>
              </Tooltip>
            </template>
          </template>
          <div
            v-if="props.navLinks.bottom.length > 0 && navLinkIndex < props.navLinks.bottom.length - 1"
            class="tw-background-color-hover tw-h-[2px] tw-w-full"
          ></div>
        </template>
      </div>
    </div>

    <div v-if="props.notificationCount" class="tw-grid tw-gap-2 tw-py-6">
      <!-- Notification -->
      <div
        v-if="props.notificationCount"
        :class="[
          'tw-relative tw-flex tw-cursor-pointer tw-items-center tw-justify-center tw-p-2',
          'tw-transition tw-duration-150 tw-ease-in-out',
          'active:tw-scale-90',
        ]"
        @click="emit('notifications', 'notifications-triggered')"
      >
        <IconBell class="tw-h-[1.25em] tw-w-[1.25em]" />
        <badge
          class="tw-absolute tw-right-4 tw-top-0.5"
          :text="String(props.notificationCount)"
          variant="danger"
          size="small"
        />
      </div>
    </div>

    <!-- Avatar -->
    <div
      v-if="props.userMenu"
      :class="[
        'tw-border-color-weak tw-absolute tw-bottom-0 tw-w-full tw-p-3.5',
        'tw-border-b-0 tw-border-l-0 tw-border-r-0 tw-border-t tw-border-solid',
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
            'tw-background-color tw-flex tw-h-[36px] tw-w-[36px] tw-cursor-pointer tw-items-center tw-justify-center tw-rounded-full',
            'tw-border-color-weak tw-border tw-border-solid',
            'tw-transition tw-duration-150 tw-ease-in-out',
            'hover:tw-background-color-hover',
            'active:tw-background-color-pressed active:tw-scale-90',
            '[&>img]:tw-h-[36px] [&>img]:tw-w-[36px] [&>img]:tw-rounded-full [&>img]:tw-object-cover',
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
              'tw-px-4 tw-py-3',
              'tw-border-color-weak tw-flex tw-justify-between tw-border-x-0 tw-border-b tw-border-t-0 tw-border-solid',
            ]"
          >
            <div class="tw-flex tw-items-center tw-gap-2">
              <div
                :class="[
                  'tw-background-color tw-flex tw-h-[36px] tw-w-[36px] tw-items-center tw-justify-center tw-rounded-full',
                  'tw-border-color-weak tw-border tw-border-solid',
                  '[&>img]:tw-h-[36px] [&>img]:tw-w-[36px] [&>img]:tw-rounded-full [&>img]:tw-object-cover',
                ]"
              >
                <template v-if="props.userMenu.profileImage && !userProfileError">
                  <img :src="props.userMenu.profileImage" alt="profile-image" @error="userProfileError = true" />
                </template>
                <template v-else>
                  <span>{{ getUserInitials(props.userMenu.name) }}</span>
                </template>
              </div>
              <div class="tw-grid tw-justify-between tw-gap-1">
                <h3 class="tw-body-sm-regular-medium tw-m-0 tw-truncate">
                  {{ props.userMenu.name }}
                </h3>
                <p class="tw-body-xs-regular tw-m-0 tw-truncate">
                  {{ props.userMenu.email }}
                </p>
              </div>
            </div>
          </div>

          <div class="tw-max-h-[268px] tw-overflow-auto">
            <template v-for="(userMenuItem, userMenuItemIndex) in props.userMenu.items" :key="userMenuItemIndex">
              <div
                v-if="!userMenuItem.hidden"
                :class="[
                  'tw-flex tw-cursor-pointer tw-gap-2 tw-p-2 tw-align-middle tw-duration-150 tw-ease-in-out',
                  'hover:tw-background-color-hover',
                  'active:tw-background-color-pressed',
                ]"
                @click="handleRedirect(userMenuItem, '', '', '')"
              >
                <component
                  :is="userMenuItem.icon"
                  v-if="userMenuItem.icon"
                  class="tw-h-[1em] tw-w-[1em] tw-text-[20px]"
                />
                <h5 class="tw-body-sm-regular tw-text-color-strong tw-m-0 tw-truncate">
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
import { sidenavPropTypes, sidenavEmitTypes } from './sidenav';
import { useSidenav } from './use-sidenav';

import { Menu, Tooltip } from 'floating-vue';

import badge from '../badge/badge.vue';

import IconPlusCircleFill from '~icons/ph/plus-circle-fill';
import IconMagnifyingGlass from '~icons/ph/magnifying-glass';
import IconGlobe from '~icons/ph/globe';
import IconCaretRight from '~icons/ph/caret-right';
import IconX from '~icons/ph/x';
import IconBell from '~icons/ph/bell';

import 'floating-vue/dist/style.css';

const props = defineProps(sidenavPropTypes);
const emit = defineEmits(sidenavEmitTypes);

const { isQuckActionMenuVisible, isUserMenuVisible, userProfileError, getUserInitials, handleRedirect } = useSidenav(
  props,
  emit,
);
</script>
