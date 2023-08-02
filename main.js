// v4

var id = [
	100, 130, 160, 200, 230, 260, 300, 330, 360, 400, 430, 460, 
	500, 560, 600, 630, 660, 700, 730, 760, 800, 830, 860, 900
];
var DARK_BURPLE = "#4e5d94";
var LIGHT_BURPLE = "#7289da";

var head = document.getElementsByTagName('head')[0];
var html = document.getElementsByTagName("html")[0];

var s = document.createElement('style');
s.type = "text/css"
s.appendChild(document.createTextNode(`
/* theme colours, font */
html {
    --brand-experiment-100: #f7f7fe;
    --brand-experiment-130: #f0f1fe;
    --brand-experiment-160: #e7e9fd;
    --brand-experiment-200: #dee0fc;
    --brand-experiment-230: #d4d7fc;
    --brand-experiment-260: #c9cdfb;
    --brand-experiment-300: #bcc1fa;
    --brand-experiment-330: ${LIGHT_BURPLE};
    --brand-experiment-360: ${LIGHT_BURPLE};
    --brand-experiment-400: ${LIGHT_BURPLE};
    --brand-experiment-430: ${LIGHT_BURPLE};
    --brand-experiment-460: ${LIGHT_BURPLE};
    --brand-experiment:     ${LIGHT_BURPLE};
    --brand-experiment-500: ${LIGHT_BURPLE};
    --brand-experiment-530: ${LIGHT_BURPLE};
    --brand-experiment-560: ${LIGHT_BURPLE};
    --brand-experiment-600: ${LIGHT_BURPLE};
    --brand-experiment-630: ${LIGHT_BURPLE};
    --brand-experiment-660: ${LIGHT_BURPLE};
    --brand-experiment-700: ${LIGHT_BURPLE};
    --brand-experiment-730: ${LIGHT_BURPLE};
    --brand-experiment-760: ${LIGHT_BURPLE};
    --brand-experiment-800: ${LIGHT_BURPLE};
    --brand-experiment-830: ${LIGHT_BURPLE};
    --brand-experiment-860: ${LIGHT_BURPLE};
    --brand-experiment-900: ${LIGHT_BURPLE};
    --brand-experiment-05a: rgba(88,101,242,0.05);
    --brand-experiment-10a: rgba(88,101,242,0.1);
    --brand-experiment-15a: rgba(88,101,242,0.15);
    --brand-experiment-20a: rgba(88,101,242,0.2);
    --brand-experiment-25a: rgba(88,101,242,0.25);
    --brand-experiment-30a: rgba(88,101,242,0.3);
    --brand-experiment-35a: rgba(88,101,242,0.35);
    --brand-experiment-40a: rgba(88,101,242,0.4);
    --brand-experiment-45a: rgba(88,101,242,0.45);
    --brand-experiment-50a: rgba(88,101,242,0.5);
    --brand-experiment-55a: rgba(88,101,242,0.55);
    --brand-experiment-60a: rgba(88,101,242,0.6);
    --brand-experiment-65a: rgba(88,101,242,0.65);
    --brand-experiment-70a: rgba(88,101,242,0.7);
    --brand-experiment-75a: rgba(88,101,242,0.75);
    --brand-experiment-80a: rgba(88,101,242,0.8);
    --brand-experiment-85a: rgba(88,101,242,0.85);
    --brand-experiment-90a: rgba(88,101,242,0.9);
    --brand-experiment-95a: rgba(88,101,242,0.95);
    --font-display: Whitney,Helvetica Neue,Helvetica,Arial,sans-serif;
}
:root {
    --font-primary: Whitney,"Helvetica Neue",Helvetica,Arial,sans-serif;
    --font-display: Whitney,"Helvetica Neue",Helvetica,Arial,sans-serif;
    --font-code: Consolas,"Andale Mono WT","Andale Mono","Lucida Console","Lucida Sans Typewriter","DejaVu Sans Mono","Bitstream Vera Sans Mono","Liberation Mono","Nimbus Mono L",Monaco,"Courier New",Courier,monospace;
}
.theme-light,.theme-dark {
	--focus-primary: ${LIGHT_BURPLE};
}
.theme-light,.theme-dark {
	border-color: transparent;
}
/* reactions */
[class^=reactionMe] {
	border: 0px transparent;
	border-radius: 5px;
}
[class^=reaction] {
	border: 0px transparent;
	border-radius: 5px;
}

/* profile banner */
[class^=userPopout] {
    border-radius: 10px;
}
[class^=banner] {
    visibility: hidden;
}
[class^=avatarWrapperNormal] {
	left: 35%;
}
[class^=headerNormal] {
    text-align: center;
}
[class^=headerText] {
    text-align: center;
}
[class^=fade] {
    background-color: var(--background-primary);
}
[class^="footer"] {
    background-color: var(--background-primary);
	border-color: transparent;
}
`));
head.appendChild(s);



/*
.theme-dark {
    --header-primary: #fff;
    --header-secondary: #b9bbbe;
    --text-normal: #dcddde;
    --text-muted: #72767d;
    --text-link: #00b0f4;
    --text-positive: #4fdc7b;
    --interactive-normal: #b9bbbe;
    --interactive-hover: #dcddde;
    --interactive-active: #fff;
    --interactive-muted: #4f545c;
    --background-primary: #36393f;
    --background-secondary: #2f3136;
    --background-secondary-alt: #292b2f;
    --background-tertiary: #202225;
    --background-accent: #4f545c;
    --background-floating: #18191c;
    --background-mobile-primary: #36393f;
    --background-mobile-secondary: #2f3136;
    --background-modifier-hover: rgba(79,84,92,0.16);
    --background-modifier-active: rgba(79,84,92,0.24);
    --background-modifier-selected: rgba(79,84,92,0.32);
    --background-modifier-accent: hsla(0,0%,100%,0.06);
    --info-positive-text: #fff;
    --info-warning-text: #fff;
    --info-danger-text: #fff;
    --info-help-background: rgba(0,176,244,0.1);
    --info-help-foreground: #00b0f4;
    --info-help-text: #fff;
    --status-warning-text: #000;
    --scrollbar-thin-thumb: #202225;
    --scrollbar-thin-track: transparent;
    --scrollbar-auto-thumb: #202225;
    --scrollbar-auto-track: #2e3338;
    --scrollbar-auto-scrollbar-color-thumb: #202225;
    --scrollbar-auto-scrollbar-color-track: #2f3136;
    --elevation-stroke: 0 0 0 1px rgba(4,4,5,0.15);
    --elevation-low: 0 1px 0 rgba(4,4,5,0.2),0 1.5px 0 rgba(6,6,7,0.05),0 2px 0 rgba(4,4,5,0.05);
    --elevation-medium: 0 4px 4px rgba(0,0,0,0.16);
    --elevation-high: 0 8px 16px rgba(0,0,0,0.24);
    --logo-primary: #fff;
    --control-brand-foreground: #a5b3e7;
    --background-mentioned: rgba(250,166,26,0.1);
    --background-mentioned-hover: rgba(250,166,26,0.08);
    --background-message-hover: rgba(4,4,5,0.07);
    --channels-default: #8e9297;
    --guild-header-text-shadow: 0 1px 1px rgba(0,0,0,0.4);
    --channeltextarea-background: #40444b;
    --activity-card-background: #202225;
    --textbox-markdown-syntax: #8e9297;
    --deprecated-card-bg: rgba(32,34,37,0.6);
    --deprecated-card-editable-bg: rgba(32,34,37,0.3);
    --deprecated-store-bg: #36393f;
    --deprecated-quickswitcher-input-background: #72767d;
    --deprecated-quickswitcher-input-placeholder: hsla(0,0%,100%,0.3);
    --deprecated-text-input-bg: rgba(0,0,0,0.1);
    --deprecated-text-input-border: rgba(0,0,0,0.3);
    --deprecated-text-input-border-hover: #040405;
    --deprecated-text-input-border-disabled: #202225;
    --deprecated-text-input-prefix: #dcddde
}

.theme-dark,.theme-light {
    --text-warning: #faa61a;
    --text-danger: #ed4245;
    --info-positive-background: rgba(59,165,92,0.1);
    --info-positive-foreground: #3ba55c;
    --info-warning-background: rgba(250,166,26,0.1);
    --info-warning-foreground: #faa61a;
    --info-danger-background: rgba(237,66,69,0.1);
    --info-danger-foreground: #ed4245;
    --status-positive-background: #3ba55c;
    --status-positive-text: #fff;
    --status-warning-background: #faa61a;
    --status-danger-background: #ed4245;
    --status-danger-text: #fff;
    --focus-primary: #00b0f4
}

.theme-light {
    --header-primary: #060607;
    --header-secondary: #4f5660;
    --text-normal: #2e3338;
    --text-muted: #747f8d;
    --text-link: #0067e0;
    --text-positive: #3ba55c;
    --interactive-normal: #4f5660;
    --interactive-hover: #2e3338;
    --interactive-active: #060607;
    --interactive-muted: #c7ccd1;
    --background-primary: #fff;
    --background-secondary: #f2f3f5;
    --background-secondary-alt: #ebedef;
    --background-tertiary: #e3e5e8;
    --background-accent: #747f8d;
    --background-floating: #fff;
    --background-mobile-primary: #f8f9f9;
    --background-mobile-secondary: #fff;
    --background-modifier-hover: rgba(116,127,141,0.08);
    --background-modifier-active: rgba(116,127,141,0.16);
    --background-modifier-selected: rgba(116,127,141,0.24);
    --background-modifier-accent: rgba(6,6,7,0.08);
    --info-positive-text: #000;
    --info-warning-text: #000;
    --info-danger-text: #000;
    --info-help-background: rgba(0,103,224,0.1);
    --info-help-foreground: #0067e0;
    --info-help-text: #000;
    --status-warning-text: #fff;
    --scrollbar-thin-thumb: rgba(79,84,92,0.3);
    --scrollbar-thin-track: transparent;
    --scrollbar-auto-thumb: #ccc;
    --scrollbar-auto-track: #f2f2f2;
    --scrollbar-auto-scrollbar-color-thumb: #e3e5e8;
    --scrollbar-auto-scrollbar-color-track: #f2f3f5;
    --elevation-stroke: 0 0 0 1px rgba(6,6,7,0.08);
    --elevation-low: 0 1px 0 rgba(6,6,7,0.1),0 1.5px 0 rgba(6,6,7,0.025),0 2px 0 rgba(6,6,7,0.025);
    --elevation-medium: 0 4px 4px rgba(0,0,0,0.08);
    --elevation-high: 0 8px 16px rgba(0,0,0,0.16);
    --logo-primary: #7289da;
    --control-brand-foreground: #7289da;
    --background-mentioned: rgba(250,166,26,0.1);
    --background-mentioned-hover: rgba(250,166,26,0.2);
    --background-message-hover: rgba(6,6,7,0.02);
    --channels-default: #6a7480;
    --guild-header-text-shadow: 0 1px 1px hsla(0,0%,100%,0.4);
    --channeltextarea-background: #ebedef;
    --activity-card-background: #fff;
    --textbox-markdown-syntax: #6a7480;
    --deprecated-card-bg: #f8f9f9;
    --deprecated-card-editable-bg: rgba(246,246,247,0.6);
    --deprecated-store-bg: #f8f9f9;
    --deprecated-quickswitcher-input-background: #fff;
    --deprecated-quickswitcher-input-placeholder: rgba(79,84,92,0.3);
    --deprecated-text-input-bg: rgba(79,84,92,0.02);
    --deprecated-text-input-border: rgba(79,84,92,0.3);
    --deprecated-text-input-border-hover: #b9bbbe;
    --deprecated-text-input-border-disabled: #dcddde;
    --deprecated-text-input-prefix: #b9bbbe
}
*/