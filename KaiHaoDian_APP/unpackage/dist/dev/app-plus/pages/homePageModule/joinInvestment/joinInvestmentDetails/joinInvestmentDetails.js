
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"status_bar { height: var(--status-bar-height); width: 100%; }\n.",[1],"top_view { height: var(--status-bar-height); width: 100%; position: fixed; top: 0; }\n.",[1],"content { width: ",[0,750],"; }\n.",[1],"my-tabs { height: ",[0,106],"; font-size: ",[0,28],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; -webkit-box-sizing: border-box; box-sizing: border-box; min-width: 100%; overflow-x: auto; border-radius: 0 0 ",[0,10]," ",[0,10],"; }\n.",[1],"my-tabs .",[1],"tab-item { line-height: ",[0,100],"; padding: 20 ",[0,0],"; min-width: ",[0,100],"; text-align: center; color: #3d3d3d; font-size: ",[0,28],"; font-weight: bold; letter-spacing: ",[0,5],"; }\n.",[1],"my-tabs .",[1],"tab-item.",[1],"active { font-weight: bold; font-size: ",[0,28],"; position: relative; color: #3d3d3d; letter-spacing: ",[0,5],"; }\n.",[1],"my-tabs .",[1],"tab-item.",[1],"active::after { content: \x22\x22; position: absolute; bottom: 0; border-radius: ",[0,10],"; left: 50%; -webkit-transform: translateX(-50%); -ms-transform: translateX(-50%); transform: translateX(-50%); width: 97%; border-bottom: ",[0,6]," solid #ffbd38; -webkit-animation: test ease 1 1.5s; animation: test ease 1 1.5s; }\n.",[1],"my-tabs.",[1],"space-between { -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n@charset \x22UTF-8\x22;\n.",[1],"status_bar { height: var(--status-bar-height); width: 100%; }\n.",[1],"top_view { height: var(--status-bar-height); width: 100%; position: fixed; top: 0; }\n.",[1],"content { width: ",[0,750],"; }\n.",[1],"banner, .",[1],"banner wx-image { width: ",[0,750],"; height: ",[0,520],"; font-size: 0; background: #3285ff; }\n.",[1],"pagesInfoBox { position: relative; }\n.",[1],"banner { position: relative; }\n.",[1],"banner wx-view { position: absolute; right: ",[0,20],"; bottom: ",[0,20],"; color: #fff; font-size: ",[0,20],"; background: rgba(200, 200, 200, 0.5); padding: 0 ",[0,20],"; border-radius: ",[0,40],"; }\n.",[1],"banner wx-view wx-text { display: inline-block; line-height: ",[0,40],"; }\n.",[1],"banner wx-view .",[1],"iconfont { margin-right: ",[0,6],"; }\n.",[1],"companyInfo { width: ",[0,750],"; -webkit-box-sizing: border-box; box-sizing: border-box; padding: ",[0,20]," ",[0,30]," 0 ",[0,30],"; }\n.",[1],"companyInfo .",[1],"_top { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; margin: ",[0,20]," 0; }\n.",[1],"companyInfo .",[1],"_top .",[1],"company_L, .",[1],"companyInfo .",[1],"_top .",[1],"company_L wx-image { width: ",[0,88],"; height: ",[0,88],"; font-size: 0; background: #eee9e9; border-radius: 50%; margin-right: ",[0,20],"; }\n.",[1],"companyInfo .",[1],"_top .",[1],"company_R { color: #666; position: relative; }\n.",[1],"companyInfo .",[1],"_top .",[1],"company_R .",[1],"iconed { position: absolute; right: ",[0,0],"; top: ",[0,8],"; color: #299dff; font-size: ",[0,28],"; }\n.",[1],"companyInfo .",[1],"_top .",[1],"company_R .",[1],"iconeds { position: absolute; right: ",[0,-40],"; top: ",[0,8],"; color: #299dff; font-size: ",[0,24],"; }\n.",[1],"companyInfo .",[1],"_top .",[1],"company_R .",[1],"R_name { width: ",[0,300],"; font-size: ",[0,30],"; color: #000000; margin-bottom: ",[0,5],"; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; white-space: nowrap; font-weight: 600; letter-spacing: ",[0,5],"; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n.",[1],"companyInfo .",[1],"_top .",[1],"company_R .",[1],"R_intro { width: ",[0,320],"; font-size: ",[0,22],"; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; white-space: nowrap; letter-spacing: ",[0,4],"; color: #6b6b6b; }\n.",[1],"companyInfo .",[1],"_top .",[1],"company_R .",[1],"R_intro wx-text { display: inline-block; vertical-align: middle; }\n.",[1],"companyInfo .",[1],"_top .",[1],"company_R .",[1],"R_intro wx-text:first-child { margin-right: ",[0,10],"; max-width: ",[0,520],"; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; white-space: nowrap; }\n.",[1],"companyInfo .",[1],"_top .",[1],"company_R .",[1],"R_intro .",[1],"iconfont { color: #ff8100; }\n.",[1],"companyInfo .",[1],"_top .",[1],"company_R .",[1],"R_rz { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"companyInfo .",[1],"_top .",[1],"company_R .",[1],"R_rz wx-view { margin-right: ",[0,20],"; font-size: ",[0,20],"; color: #ff8100; }\n.",[1],"companyInfo .",[1],"_top .",[1],"company_R .",[1],"R_rz wx-view wx-text { display: inline-block; vertical-align: middle; }\n.",[1],"companyInfo .",[1],"_top .",[1],"company_R .",[1],"R_rz wx-view .",[1],"iconfont { font-size: ",[0,24],"; color: #3285ff; margin-right: ",[0,4],"; }\n.",[1],"companyInfo .",[1],"_caller { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; padding-bottom: 15px; border-bottom: 1px solid #eeeeee; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; margin-top: ",[0,30],"; }\n.",[1],"companyInfo .",[1],"_caller .",[1],"_L { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"companyInfo .",[1],"_caller .",[1],"_L wx-image { width: ",[0,70],"; height: ",[0,70],"; font-size: 0; border-radius: 50%; background: #eee9e9; margin-right: ",[0,20],"; }\n.",[1],"companyInfo .",[1],"_caller .",[1],"_L .",[1],"_more { color: #666; text-align: center; line-height: ",[0,50],"; font-size: ",[0,28],"; }\n.",[1],"companyInfo .",[1],"_caller .",[1],"_R { text-align: right; font-size: ",[0,24],"; color: #666; }\n.",[1],"companyInfo .",[1],"_caller .",[1],"_R wx-text { display: inline-block; vertical-align: middle; }\n.",[1],"companyInfo .",[1],"_caller .",[1],"_R .",[1],"iconfont { margin-left: ",[0,10],"; font-size: ",[0,38],"; }\n.",[1],"projectIntro { width: ",[0,750],"; border-top: ",[0,10]," solid #f3f3f3; }\n.",[1],"projectIntro .",[1],"intro_cell { padding: 0 ",[0,30],"; height: ",[0,80],"; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"projectIntro .",[1],"intro_cell \x3e wx-view { line-height: ",[0,80],"; color: #999; vertical-align: middle; }\n.",[1],"projectIntro .",[1],"intro_cell .",[1],"_L { width: ",[0,100],"; font-size: ",[0,22],"; }\n.",[1],"projectIntro .",[1],"intro_cell .",[1],"_R { width: ",[0,590],"; font-size: ",[0,24],"; color: #333; }\n.",[1],"projectIntro .",[1],"intro_cell .",[1],"_R wx-text { display: inline-block; vertical-align: middle; }\n.",[1],"projectIntro .",[1],"intro_cell .",[1],"_R wx-text:first-child { color: #ff8100; margin-right: ",[0,4],"; font-weight: bold; }\n.",[1],"projectIntro .",[1],"intro_cell:first-child { border-bottom: ",[0,2]," solid #eee; }\n.",[1],"projectIntro .",[1],"intro_cell:first-child \x3e .",[1],"_R { font-size: ",[0,26],"; }\n.",[1],"projectIntro .",[1],"intro_cell:nth-child(2n) { background: #f5f5f5; }\n.",[1],"projectIntro .",[1],"intro_cellTwo \x3e wx-view { width: ",[0,330],"; font-size: ",[0,22],"; }\n.",[1],"projectIntro .",[1],"intro_cellTwo \x3e wx-view \x3e wx-view { display: inline-block; }\n.",[1],"projectIntro .",[1],"intro_cellTwo \x3e wx-view \x3e wx-view:first-child { width: ",[0,100],"; }\n.",[1],"projectIntro .",[1],"intro_cellTwo \x3e wx-view \x3e wx-view:last-child { font-size: ",[0,24],"; color: #333; }\n.",[1],"projectIntro .",[1],"intro_cellTwo .",[1],"_C { margin-right: ",[0,4],"; font-weight: bold; color: #ff8100; }\n.",[1],"projectDetail { width: ",[0,750],"; -webkit-box-sizing: border-box; box-sizing: border-box; color: #999; padding-bottom: ",[0,100],"; }\n.",[1],"projectDetail .",[1],"_title { text-align: center; font-size: ",[0,24],"; line-height: ",[0,80],"; }\n.",[1],"projectDetail .",[1],"_content { color: #666; font-size: ",[0,26],"; }\n.",[1],"projectShow { width: ",[0,750],"; padding: 0 ",[0,30]," ",[0,10],"; -webkit-box-sizing: border-box; box-sizing: border-box; }\n.",[1],"projectShow .",[1],"_title { text-align: center; font-size: ",[0,24],"; line-height: ",[0,80],"; }\n.",[1],"projectShow .",[1],"imgAll { -webkit-box-sizing: border-box; box-sizing: border-box; overflow: hidden; }\n.",[1],"projectShow .",[1],"imgAll .",[1],"imgAll_scroll { white-space: nowrap; font-size: 0; }\n.",[1],"projectShow .",[1],"imgAll .",[1],"imgAll_scroll wx-image { width: ",[0,210],"; height: ",[0,240],"; margin-right: ",[0,20],"; background: #eee9e9; border-radius: ",[0,8],"; }\n.",[1],"service_top { border-top: ",[0,10]," solid #eee; border-bottom: ",[0,10]," solid #eee; }\n.",[1],"service_top .",[1],"_title, .",[1],"service_top .",[1],"_content { width: ",[0,750],"; -webkit-box-sizing: border-box; box-sizing: border-box; padding: 0 ",[0,30],"; }\n.",[1],"service_top .",[1],"_title { line-height: ",[0,80],"; font-size: ",[0,28],"; color: #333; text-align: center; }\n.",[1],"service_top .",[1],"_content { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"service_top .",[1],"_content .",[1],"_cell { width: ",[0,110],"; text-align: center; }\n.",[1],"service_top .",[1],"_content .",[1],"_cell \x3e wx-image { width: ",[0,50],"; height: ",[0,50],"; border-radius: 50%; }\n.",[1],"service_top .",[1],"_content .",[1],"_cell \x3e wx-view:last-child { color: lightgreen; font-size: ",[0,24],"; color: #666; line-height: ",[0,60],"; }\n.",[1],"openStore_parent { border-bottom: ",[0,10]," solid #eee; }\n.",[1],"openStore_parent .",[1],"_title, .",[1],"openStore_parent .",[1],"_content { width: ",[0,750],"; -webkit-box-sizing: border-box; box-sizing: border-box; padding: 0 ",[0,30],"; }\n.",[1],"openStore_parent .",[1],"_title { line-height: ",[0,80],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; font-size: ",[0,28],"; color: #333; }\n.",[1],"openStore_parent .",[1],"_title \x3e wx-view:last-child wx-text { display: inline-block; vertical-align: middle; }\n.",[1],"openStore_parent .",[1],"_title \x3e wx-view:last-child wx-text:last-child { font-size: ",[0,32],"; }\n.",[1],"openStore_parent .",[1],"_content { overflow: hidden; }\n.",[1],"openStore_parent .",[1],"_content .",[1],"_scroll { white-space: nowrap; }\n.",[1],"openStore_parent .",[1],"_content .",[1],"_scroll .",[1],"_cell { display: inline-block; vertical-align: middle; width: ",[0,250],"; margin-right: ",[0,20],"; }\n.",[1],"openStore_parent .",[1],"_content .",[1],"_scroll .",[1],"_cell .",[1],"_logo, .",[1],"openStore_parent .",[1],"_content .",[1],"_scroll .",[1],"_cell .",[1],"_logo wx-image { font-size: 0; width: ",[0,250],"; height: ",[0,240],"; background: #eee9e9; border-radius: ",[0,16],"; }\n.",[1],"openStore_parent .",[1],"_content .",[1],"_scroll .",[1],"_cell .",[1],"_name, .",[1],"openStore_parent .",[1],"_content .",[1],"_scroll .",[1],"_cell .",[1],"_intro { width: ",[0,250],"; font-size: ",[0,26],"; color: #666; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; white-space: nowrap; line-height: ",[0,40],"; }\n.",[1],"openStore_parent .",[1],"_content .",[1],"_scroll .",[1],"_cell .",[1],"_intro { font-size: ",[0,22],"; color: #999; }\n.",[1],"openStore_parent .",[1],"_content .",[1],"_scroll .",[1],"_cell:last-child { margin-right: 0; }\n.",[1],"companyInfo { background-color: rgba(255, 255, 255, 0.9); position: absolute; top: ",[0,-160],"; width: 93%; left: ",[0,24],"; border-radius: ",[0,20],"; -webkit-box-shadow: 0 ",[0,2]," ",[0,20]," rgba(155, 155, 155, 0.6); box-shadow: 0 ",[0,2]," ",[0,20]," rgba(155, 155, 155, 0.6); }\n.",[1],"userInfo { padding: ",[0,30]," 0; font-size: ",[0,24],"; }\n.",[1],"userInfoNuber { color: #6b6b6b; letter-spacing: ",[0,5],"; }\n.",[1],"userInfoMsg { color: #000; padding-left: ",[0,5],"; padding-right: ",[0,20],"; }\n.",[1],"address { line-height: 2; font-size: ",[0,24],"; padding-bottom: ",[0,30],"; border-bottom: 1px solid #eeeeee; }\n.",[1],"visitor { font-size: ",[0,26],"; color: #858585; padding-right: ",[0,20],"; }\n.",[1],"brand { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; font-size: ",[0,28],"; }\n.",[1],"projectDetail { margin-top: ",[0,460],"; }\n.",[1],"features { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"features .",[1],"featUresImgBox { width: 27%; padding: ",[0,20]," ",[0,20],"; }\n.",[1],"features .",[1],"featUresImgBox .",[1],"_img { width: 100%; height: ",[0,215],"; border-radius: ",[0,40],"; }\n.",[1],"featurestitle { padding: ",[0,10]," ",[0,20],"; width: ",[0,200],"; font-size: ",[0,24],"; line-height: 2; color: #000000; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; white-space: nowrap; }\n.",[1],"figurePeoplep { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; margin-bottom: ",[0,140],"; }\n.",[1],"figurePeoplep wx-view { padding: ",[0,20]," 0 0 ",[0,28],"; border-radius: ",[0,40],"; }\n.",[1],"figurePeoplep wx-view .",[1],"_img { width: ",[0,333],"; height: ",[0,250],"; border-radius: ",[0,20],"; }\n.",[1],"Aboutcompany { padding: ",[0,30]," ",[0,30],"; }\n.",[1],"introduction2 { border-radius: ",[0,20],"; padding: ",[0,0]," ",[0,27],"; -webkit-box-shadow: 0 1px 10px rgba(155, 155, 155, 0.6); box-shadow: 0 1px 10px rgba(155, 155, 155, 0.6); }\n.",[1],"introduction2 .",[1],"introduction { padding: ",[0,0]," ",[0,27],"; padding-bottom: ",[0,40],"; border-bottom: ",[0,2]," solid #d2d2d2; }\n.",[1],"introduction2 .",[1],"introduction .",[1],"introductionTitle { text-align: center; line-height: 3; letter-spacing: ",[0,5],"; font-size: ",[0,32],"; font-weight: 600; color: #000; }\n.",[1],"introduction2 .",[1],"introduction .",[1],"introductionContent { text-indent: ",[0,40],"; font-size: 14px; color: #aeaeae; letter-spacing: ",[0,5],"; }\n.",[1],"commentBox { padding: ",[0,30]," ",[0,30],"; -webkit-box-sizing: border-box; box-sizing: border-box; }\n.",[1],"commentList { -webkit-box-sizing: border-box; box-sizing: border-box; border-radius: ",[0,20],"; padding: ",[0,0]," ",[0,27],"; -webkit-box-shadow: 0 1px 10px rgba(155, 155, 155, 0.6); box-shadow: 0 1px 10px rgba(155, 155, 155, 0.6); }\n.",[1],"commentListTop { position: relative; padding: ",[0,40]," 0; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"commentListTop .",[1],"icons { color: #259bfe; padding-left: ",[0,10],"; }\n.",[1],"commentListTop .",[1],"position { font-size: ",[0,28],"; color: #747474; line-height: 2; font-weight: 600; }\n.",[1],"commentListTop .",[1],"userMassage { padding-left: ",[0,30],"; }\n.",[1],"commentListTop .",[1],"company { font-size: ",[0,24],"; color: #989898; font-weight: lighter; }\n.",[1],"commentListTop .",[1],"userImg { width: ",[0,100],"; height: ",[0,100],"; }\n.",[1],"commentListTop .",[1],"userImg .",[1],"_img { width: ",[0,100],"; height: ",[0,100],"; border-radius: 50%; }\n.",[1],"commentContent { margin-top: ",[0,30],"; font-size: ",[0,28],"; letter-spacing: ",[0,5],"; color: #000; }\n.",[1],"icond { position: absolute; right: ",[0,12],"; top: ",[0,50],"; }\n.",[1],"commentNumber { color: #666666; font-size: ",[0,28],"; padding-left: ",[0,20],"; }\n.",[1],"introduction { border-bottom: ",[0,2]," solid #d2d2d2; }\n.",[1],"iconecodes { position: absolute; right: ",[0,-218],"; top: ",[0,-6],"; font-size: ",[0,28],"; color: #686868; font-weight: 600; }\n.",[1],"iconecoded { font-size: ",[0,60],"; color: #ffbd38; position: absolute; right: ",[0,-208],"; top: ",[0,46],"; }\n.",[1],"bottonBottom { width: 100%; height: ",[0,98],"; background-color: #ffbd38; position: fixed; bottom: 0; padding: ",[0,15]," ",[0,20],"; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"ComentInput { width: ",[0,488],"; height: ",[0,70],"; border-radius: ",[0,40],"; background-color: #fff; }\n.",[1],"ComentInput .",[1],"_input { padding-top: ",[0,10],"; padding-left: ",[0,40],"; font-size: 14px; }\n.",[1],"LIst { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"ComentImgList { -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"ComentImgList .",[1],"_img { width: ",[0,65],"; height: ",[0,65],"; margin: ",[0,6]," ",[0,0]," ",[0,6]," ",[0,40],"; }\n.",[1],"ComentImgList2 { -webkit-box-sizing: border-box; box-sizing: border-box; padding-left: ",[0,60],"; }\n.",[1],"ComentImgList2 .",[1],"_img { margin-top: ",[0,-12],"; width: ",[0,100],"; height: ",[0,100],"; }\n.",[1],"subreply { -webkit-box-sizing: border-box; box-sizing: border-box; color: #ffc760; font-size: ",[0,28],"; padding: ",[0,20]," 0; font-weight: lighter; }\n",],undefined,{path:"./pages/homePageModule/joinInvestment/joinInvestmentDetails/joinInvestmentDetails.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/homePageModule/joinInvestment/joinInvestmentDetails/joinInvestmentDetails.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      