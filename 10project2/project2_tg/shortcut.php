<script src="./js/shortcut.js"></script>

<aside class="shortcut">
  <figure class="bg"></figure>
  <div class="center">
    <p><img src="./img/shortcut/shortctu1_text.png" alt=""></p>
    <a href="#"><img src="./img/shortcut/shortcut1_icon.png" alt=""></a>
  </div>
  <svg style="display : none;">
    <filter id="ripple">
      <feTurbulence id="water" numOctaves="3" seed="1" baseFrequency="0.02 0.5" />
      <feDisplacementMap scale="15" in="SourceGraphic" />
      <animate href="#water" attributeName="baseFrequency" keyTimes="0;0.5;1" values="0.002;0.008;0.002" dur="5s" repeatCount="indefinite"/>
    </filter>
  </svg>  
</aside>