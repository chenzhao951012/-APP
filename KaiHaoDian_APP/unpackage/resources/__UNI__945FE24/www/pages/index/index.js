
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"status_bar { height: var(--status-bar-height); width: 100%; }\n.",[1],"top_view { height: var(--status-bar-height); width: 100%; position: fixed; top: 0; }\n.",[1],"content { width: ",[0,750],"; }\nbody { height: 100%; }\n.",[1],"textHidden { overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; white-space: nowrap; }\n.",[1],"content { width: ",[0,750],"; height: 100%; background: #f9f9f9; }\n.",[1],"index_swiper { position: relative; }\n.",[1],"browse { position: absolute; top: ",[0,54],"; right: ",[0,34],"; z-index: 10; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; background: rgba(35, 35, 35, 0.3); padding: ",[0,10]," ",[0,20],"; border-radius: ",[0,50],"; }\n.",[1],"browse .",[1],"iconfont { font-size: ",[0,28],"; }\n.",[1],"browse wx-text { vertical-align: middle; color: #fff; }\n.",[1],"browse_num { font-size: ",[0,24],"; margin-left: ",[0,10],"; }\n.",[1],"location { position: absolute; bottom: ",[0,54],"; left: ",[0,34],"; z-index: 10; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; font-size: ",[0,30],"; color: #fff; background: rgba(35, 35, 35, 0.3); padding: ",[0,10]," ",[0,20],"; border-radius: ",[0,50],"; }\n.",[1],"location wx-text { vertical-align: middle; }\n.",[1],"location wx-text:last-child { font-size: ",[0,24],"; margin-left: ",[0,10],"; }\n.",[1],"search { -webkit-box-shadow: ",[0,0]," ",[0,4]," ",[0,40]," rgba(119, 136, 153, 0.3); box-shadow: ",[0,0]," ",[0,4]," ",[0,40]," rgba(119, 136, 153, 0.3); width: ",[0,580],"; height: ",[0,70],"; border-radius: ",[0,70],"; position: absolute; bottom: ",[0,-35],"; left: calc(50% - ",[0,290],"); z-index: 10; background: #fff; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; font-size: ",[0,28],"; }\n.",[1],"search wx-text { vertical-align: middle; line-height: ",[0,70],"; text-align: center; color: #666; }\n.",[1],"search wx-text:first-child { width: ",[0,80],"; font-size: ",[0,30],"; }\n.",[1],"search wx-text:last-child { width: ",[0,500],"; }\n.",[1],"index_swiper, .",[1],"_swiper { width: ",[0,750],"; height: ",[0,340],"; font-size: 0; background: lightblue; }\n.",[1],"moduleParent { width: ",[0,750],"; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; background: #fff; padding: 0 ",[0,30]," ",[0,30],"; }\n.",[1],"moduleChilds wx-image { width: ",[0,114],"; height: ",[0,114],"; font-size: 0; border-radius: ",[0,16],"; }\n.",[1],"moduleChilds { position: relative; text-align: center; margin: ",[0,80]," 0; margin-right: ",[0,38],"; }\n.",[1],"moduleChilds:nth-child(4n) { margin-right: 0; }\n.",[1],"moduleChilds:nth-child(1n) { margin-bottom: 0; }\n.",[1],"moduleChilds wx-view { color: #666; font-size: ",[0,24],"; }\n.",[1],"contactsParent { width: ",[0,750],"; -webkit-box-sizing: border-box; box-sizing: border-box; padding: 0 0 ",[0,30],"; background: #f5f5f5; }\n.",[1],"_contacts_title { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; width: ",[0,750],"; -webkit-box-sizing: border-box; box-sizing: border-box; padding: 0 ",[0,30],"; line-height: ",[0,80],"; color: #999; }\n.",[1],"_contacts_titleL { font-size: ",[0,28],"; }\n.",[1],"_contacts_titleR { font-size: ",[0,28],"; }\n.",[1],"_contacts_titleR wx-text { display: inline-block; vertical-align: middle; }\n.",[1],"_contactsCell { width: ",[0,750],"; -webkit-box-sizing: border-box; box-sizing: border-box; padding: 0 ",[0,30],"; overflow: hidden; white-space: nowrap; }\n.",[1],"_contacts { border-radius: ",[0,8],"; background: #fff; display: inline-block; vertical-align: middle; width: ",[0,310],"; height: ",[0,440],"; margin-right: ",[0,16],"; font-size: 0; text-align: center; }\n.",[1],"_contacts \x3e wx-image { width: ",[0,84],"; height: ",[0,84],"; margin: 0 auto; margin-top: ",[0,36],"; border-radius: 50%; background: #eee9e9; }\n.",[1],"_contacts .",[1],"_contacts_name, .",[1],"_contacts .",[1],"_contacts_company, .",[1],"_contacts .",[1],"_contacts_ps { line-height: ",[0,48],"; width: ",[0,260],"; font-size: ",[0,26],"; text-align: center; margin: 0 auto; margin-top: ",[0,20],"; }\n.",[1],"_contacts .",[1],"_contacts_name { color: #333; font-size: ",[0,30],"; }\n.",[1],"_contacts .",[1],"_contacts_company { color: #666; }\n.",[1],"_contacts .",[1],"_contacts_ps { color: #999; font-size: ",[0,24],"; margin-top: ",[0,10],"; }\n.",[1],"_contacts .",[1],"_contacts_ps wx-text { display: inline-block; vertical-align: middle; }\n.",[1],"_contacts .",[1],"_contacts_ps .",[1],"iconfont { font-size: ",[0,28],"; color: #fbbf13; margin-left: ",[0,10],"; }\n.",[1],"_contacts .",[1],"_contacts_gz_state { width: ",[0,120],"; line-height: ",[0,48],"; border: ",[0,2]," solid #3285ff; color: #3285ff; border-radius: ",[0,48],"; margin: 0 auto; font-size: ",[0,24],"; text-align: center; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; letter-spacing: ",[0,4],"; margin-top: ",[0,40],"; }\n.",[1],"_contacts .",[1],"_contacts_gz_state2 { border: ",[0,2]," solid #f9f9f9; background: #f5f5f5; color: #999; }\n.",[1],"_contacts:last-child { margin-right: 0; }\n.",[1],"openStory { background: #fff; }\n.",[1],"openStory .",[1],"openStory_title { width: ",[0,750],"; -webkit-box-sizing: border-box; box-sizing: border-box; padding: 0 ",[0,30],"; color: #666; line-height: ",[0,80],"; border-bottom: ",[0,2]," solid #eee; font-size: ",[0,28],"; }\n.",[1],"openStory .",[1],"openStory_cell { width: ",[0,750],"; -webkit-box-sizing: border-box; box-sizing: border-box; padding: ",[0,30]," ",[0,30]," 0; border-bottom: ",[0,4]," solid #eee; }\n.",[1],"osCell_title { width: ",[0,690],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"osCell_title \x3e .",[1],"osCell_title_left, .",[1],"osCell_title .",[1],"osCell_title_left wx-image { width: ",[0,80],"; height: ",[0,80],"; font-size: 0; background: #3285ff; border-radius: 50%; }\n.",[1],"osCell_title \x3e .",[1],"osCell_title_right { width: ",[0,590],"; }\n.",[1],"osCell_title \x3e .",[1],"osCell_title_right \x3e .",[1],"_name { font-size: 0; }\n.",[1],"osCell_title \x3e .",[1],"osCell_title_right \x3e .",[1],"_name \x3e wx-text { display: inline-block; font-size: ",[0,34],"; color: #333; font-weight: bold; }\n.",[1],"osCell_title \x3e .",[1],"osCell_title_right \x3e .",[1],"_name \x3e wx-text:first-child { font-weight: normal; }\n.",[1],"osCell_title \x3e .",[1],"osCell_title_right \x3e .",[1],"_name \x3e wx-text:last-child { font-size: ",[0,28],"; color: #999; font-weight: normal; }\n.",[1],"osCell_title \x3e .",[1],"osCell_title_right \x3e .",[1],"_company { font-size: 0; }\n.",[1],"osCell_title \x3e .",[1],"osCell_title_right \x3e .",[1],"_company \x3e wx-text { font-size: ",[0,26],"; color: #666; display: inline-block; vertical-align: middle; }\n.",[1],"osCell_title \x3e .",[1],"osCell_title_right \x3e .",[1],"_company \x3e .",[1],"_L { max-width: ",[0,550],"; margin-right: ",[0,10],"; }\n.",[1],"osCell_title \x3e .",[1],"osCell_title_right \x3e .",[1],"_company \x3e .",[1],"iconfont { color: #fbbf13; font-size: ",[0,28],"; }\n.",[1],"osCell_content { font-size: ",[0,30],"; color: #333; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; letter-spacing: ",[0,2],"; padding-bottom: ",[0,10],"; line-height: ",[0,44],"; }\n.",[1],"osCell_ImgAll, .",[1],"osCell_ImgAll wx-image { width: ",[0,690],"; height: ",[0,280],"; font-size: 0; background: #eee9e9; border-radius: ",[0,4],"; }\n.",[1],"osCell_ImgOrText { width: ",[0,690],"; height: ",[0,130],"; background: #f3f3f3; font-size: 0; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; border-radius: ",[0,4],"; }\n.",[1],"osCell_ImgOrText \x3e .",[1],"_logo { width: ",[0,220],"; height: ",[0,130],"; border-radius: ",[0,4],"; background: lightblue; }\n.",[1],"osCell_ImgOrText \x3e .",[1],"_text { width: ",[0,460],"; height: ",[0,130],"; color: #666; line-height: ",[0,42],"; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; font-size: ",[0,26],"; letter-spacing: ",[0,2],"; }\n.",[1],"osCell_bottom { width: ",[0,690],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; font-size: 0; }\n.",[1],"osCell_bottom \x3e wx-view { font-size: ",[0,24],"; color: #999; line-height: ",[0,80],"; }\n.",[1],"osCell_bottom \x3e .",[1],"osCell_bottom_left { width: ",[0,200],"; }\n.",[1],"osCell_bottom \x3e .",[1],"osCell_bottom_center { width: ",[0,300],"; }\n.",[1],"osCell_bottom \x3e .",[1],"osCell_bottom_right { width: ",[0,190],"; text-align: right; }\n.",[1],"osCell_bottom \x3e .",[1],"osCell_bottom_right \x3e wx-text { display: inline-block; vertical-align: middle; }\n",],undefined,{path:"./pages/index/index.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/index/index.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      