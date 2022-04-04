function loadFiles(dir){
   if (WebSite.isNW) return;
	dir.rel('res.json').obj({"images":[{"name":"$pat_base","url":"images/base.png","pwidth":32,"pheight":32},{"name":"$pat_sample","url":"images/Sample.png"},{"name":"$pat_neko","url":"images/neko.png","pwidth":32,"pheight":32},{"name":"$pat_mapchip","url":"images/mapchip.png","pwidth":32,"pheight":32},{"name":"$icon_thumbnail","pwidth":200,"pheight":200,"url":"images/icon_thumbnail.png"},{"type":"single","name":"$pat_fukidasi","url":"images/fukidasi.png"},{"type":"single","name":"$pat_kuruma","url":"images/kuruma.png"},{"type":"wh","name":"$pat_saru","url":"images/saru.png","pwidth":745,"pheight":1102},{"type":"wh","name":"$pat_gorila","url":"images/gorila.png","pwidth":745,"pheight":1146},{"type":"single","name":"$pat_gorila_ikari","url":"images/gorila_ikari.png"},{"type":"single","name":"$pat_saru_hokaku","url":"images/saru_hokaku.png"},{"type":"wh","name":"$pat_gorilla_itimaie","url":"images/gorilla_itimaie.jpg","pwidth":734,"pheight":1080},{"type":"single","name":"$pat_saru_hokaku_miss","url":"images/saru_hokaku_miss.png"},{"type":"single","name":"$pat_saru_hokaku_yatta","url":"images/saru_hokaku_yatta.png"},{"type":"wh","name":"$pat_kurayami","url":"images/kurayami.png","pwidth":2160,"pheight":3840}],"sounds":[{"name":"$se_k_147","url":"sounds/k_147.mid"},{"name":"$se_k_106","url":"sounds/k_106.mid"},{"name":"$se_jump","url":"sounds/jump.mp3"},{"name":"$se_gottuan","url":"sounds/gottuan.ogg"},{"name":"$se_gunshot","url":"sounds/gunshot.mp3"},{"name":"$se_get","url":"sounds/get.ogg"}]});
	dir.rel('options.json').obj({"compiler":{"namespace":"user","defaultSuperClass":"kernel.Actor","dependingProjects":[{"namespace":"kernel","url":"js/kernel.js"}],"noLoopCheck":false,"field_strict":false},"run":{"mainClass":"user.Title","bootClass":"kernel.Boot","globals":{"$defaultFPS":60,"$imageSmoothingDisabled":true,"$soundLoadAndDecode":false}},"plugins":{"PicoAudio":1},"kernelEditable":false,"language":"tonyu","version":1639557686041});
}