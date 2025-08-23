import{i as b,r as y,e as C,n as v,c as x,a as N,x as c,A as p,f as u,S as m,Z as h,$,a0 as k,a1 as R,g as A,W as I,R as S,h as T,a2 as f}from"./index-DOXrWuLe.js";const O=b`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var g=function(n,e,i,r){var o=arguments.length,t=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,i,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(t=(o<3?s(t):o>3?s(e,i,t):s(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let w=class extends N{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return c`
      <button>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){const e=this.networkImages.slice(0,5);return c` <wui-flex class="networks">
      ${e?.map(i=>c` <wui-flex class="network-icon"> <wui-image src=${i}></wui-image> </wui-flex>`)}
    </wui-flex>`}};w.styles=[y,C,O];g([v({type:Array})],w.prototype,"networkImages",void 0);g([v()],w.prototype,"text",void 0);w=g([x("wui-compatible-network")],w);const _=b`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`;var d=function(n,e,i,r){var o=arguments.length,t=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,i,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(t=(o<3?s(t):o>3?s(e,i,t):s(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let l=class extends N{constructor(){super(),this.unsubscribe=[],this.address=p.state.address,this.profileName=p.state.profileName,this.network=u.state.activeCaipNetwork,this.unsubscribe.push(p.subscribe(e=>{e.address?(this.address=e.address,this.profileName=e.profileName):m.showError("Account not found")}),u.subscribeKey("activeCaipNetwork",e=>{e?.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw new Error("w3m-wallet-receive-view: No account provided");const e=h.getNetworkImage(this.network);return c` <wui-flex
      flexDirection="column"
      .padding=${["0","l","l","l"]}
      alignItems="center"
    >
      <wui-chip-button
        data-testid="receive-address-copy-button"
        @click=${this.onCopyClick.bind(this)}
        text=${$.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        size="sm"
        imageSrc=${e||""}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["l","0","0","0"]}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${k.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          color=${R(k.state.themeVariables["--w3m-qr-color"])}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const e=u.getAllRequestedCaipNetworks(),i=u.checkIfSmartAccountEnabled(),r=u.state.activeCaipNetwork,o=e.filter(a=>a?.chainNamespace===r?.chainNamespace);if(A(r?.chainNamespace)===I.ACCOUNT_TYPES.SMART_ACCOUNT&&i)return r?c`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[h.getNetworkImage(r)??""]}
      ></wui-compatible-network>`:null;const s=(o?.filter(a=>a?.assets?.imageId)?.slice(0,5)).map(h.getNetworkImage).filter(Boolean);return c`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${s}
    ></wui-compatible-network>`}onReceiveClick(){S.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(T.copyToClopboard(this.address),m.showSuccess("Address copied"))}catch{m.showError("Failed to copy")}}};l.styles=_;d([f()],l.prototype,"address",void 0);d([f()],l.prototype,"profileName",void 0);d([f()],l.prototype,"network",void 0);l=d([x("w3m-wallet-receive-view")],l);export{l as W3mWalletReceiveView};
