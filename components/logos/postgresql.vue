<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384">
    <path id="elephant" style="opacity: 0;" fill="#5ca2db" d="M352.65 233.99c-43.396 8.95-46.38-5.742-46.38-5.742 45.82-67.987 64.973-154.287 48.444-175.409C309.62-4.776 231.562 22.473 230.259 23.18l-.419.075c-8.573-1.78-18.168-2.84-28.952-3.016-19.636-.322-34.53 5.148-45.832 13.719 0 0-139.25-57.365-132.773 72.147 1.378 27.553 39.49 208.477 84.95 153.829 16.616-19.983 32.67-36.878 32.67-36.878 7.974 5.296 17.52 7.998 27.527 7.028l.777-.66c-.241 2.481-.13 4.908.312 7.78-11.711 13.085-8.27 15.382-31.681 20.201-23.689 4.882-9.773 13.574-.687 15.846 11.015 2.754 36.498 6.656 53.717-17.448l-.687 2.75c4.589 3.676 7.811 23.907 7.271 42.246-.54 18.34-.9 30.931 2.715 40.766 3.616 9.835 7.219 31.963 37.995 25.368 25.716-5.51 39.042-19.792 40.896-43.613 1.316-16.936 4.293-14.432 4.48-29.573l2.389-7.169c2.753-22.957.437-30.363 16.28-26.918l3.85.338c11.662.53 26.924-1.876 35.881-6.039 19.288-8.951 30.728-23.897 11.71-19.97z" />
    <g id="face" style="opacity: 0;">
      <path
        fill="none"
        
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="10.754"
        d="M191.731 247.149c-1.194 42.717.3 85.732 4.48 96.186 4.183 10.454 13.133 30.788 43.912 24.195 25.713-5.513 35.07-16.181 39.129-39.728 2.99-17.325 8.755-65.44 9.494-75.297M154.84 33.004S15.498-23.948 21.976 105.564c1.378 27.553 39.494 208.483 84.952 153.833 16.613-19.986 31.636-35.66 31.636-35.66M230.107 22.609C225.283 24.12 307.618-7.49 354.41 52.3c16.528 21.123-2.625 107.422-48.443 175.411"
      />
      <path
        fill="none"
        
        stroke-linecap="round"
        stroke-linejoin="bevel"
        stroke-width="10.754"
        d="M305.966 227.711s2.986 14.697 46.382 5.74c19.014-3.927 7.571 11.02-11.713 19.976-15.826 7.345-51.308 9.227-51.887-.922-1.492-26.188 18.674-18.232 17.22-24.794-1.317-5.909-10.335-11.709-16.3-26.172-5.209-12.624-71.429-109.432 18.363-95.054 3.29-.681-23.418-85.41-107.45-86.787-84.015-1.378-81.258 103.318-81.258 103.318"
      />
      <path
        fill="none"
        
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="10.754"
        d="M168.213 236.667c-11.713 13.084-8.269 15.381-31.681 20.202-23.689 4.883-9.771 13.573-.688 15.843 11.015 2.757 36.498 6.659 53.717-17.451 5.243-7.34-.031-19.054-7.234-22.04-3.48-1.441-8.133-3.248-14.114 3.446z"
      />
      <path
        fill="none"
        
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="10.754"
        d="M167.446 236.439c-1.18-7.693 2.527-16.847 6.5-27.557 5.972-16.068 19.75-32.14 8.729-83.111-8.216-37.984-63.319-7.905-63.353-2.755-.034 5.149 2.492 26.106-.92 50.51-4.454 31.844 20.262 58.777 48.724 56.021"
      />
      <path
        fill="none"
        
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="10.754"
        d="M308.031 106.485c.745 13.797-2.972 23.196-3.44 37.884-.694 21.35 10.179 45.787-6.204 70.254"
      />
    </g>
    <ellipse
      id="leftEye"
      se
      cx="161"
      cy="124"
      fill="white"
      rx="12"
      ry="0"
    />
    <ellipse
      id="rightEye"
      se
      cx="285"
      cy="124"
      fill="white"
      rx="12"
      ry="0"
    />

    <animate
      id="bottomAnim"
      ref="animate"
      xlink:href="#bottom"
      attributeType="CSS"
      begin="indefinite"
      from="0"
      to="1"
      dur="250ms"
      attributeName="opacity"
      fill="freeze"
    />
    <animate
      id="faceAnim"
      xlink:href="#face"
      attributeType="CSS"
      begin="bottomAnim.end - 50ms"
      from="0"
      to="1"
      dur="250ms"
      attributeName="opacity"
      fill="freeze"
    />
    <animate
      id="elephantAnim"
      xlink:href="#elephant"
      attributeType="CSS"
      begin="faceAnim.end"
      from="0"
      to="1"
      dur="250ms"
      attributeName="opacity"
      fill="freeze"
    />
    <animate
      xlink:href="#leftEye"
      attributeType="XML"
      values="0 ; 5; 5 ; 0 ; 5"
      keyTimes="0 ; 0.25 ; 0.5 ; 0.75 ; 1"
      begin="elephantAnim.end"
      from="0"
      to="5"
      dur="250ms"
      attributeName="ry"
      fill="freeze"
    />
    <animate
      xlink:href="#rightEye"
      attributeType="XML"
      values="0 ; 5; 5 ; 0 ; 5"
      keyTimes="0 ; 0.25 ; 0.5 ; 0.75 ; 1"
      begin="elephantAnim.end"
      from="0"
      to="5"
      dur="250ms"
      attributeName="ry"
      fill="freeze"
    />
  </svg>
</template>
<script>
import logos from '~/mixins/logos.js'
export default {
  mixins: [logos]
}
</script>
<style lang="styl" scoped>
  #face
    path
      stroke: #336791
</style>
