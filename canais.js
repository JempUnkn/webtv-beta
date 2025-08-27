// canais.js
const canais = [
    {
        "name": "RTP 1",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/RTP1.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://streaming-live.rtp.pt/liverepeater/smil:rtp1HD.smil/playlist.m3u8"
    },
    {
        "name": "RTP 2",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/RTP2.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://streaming-live.rtp.pt/liverepeater/smil:rtp2HD.smil/playlist.m3u8"
    },
    {
        "name": "SIC",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/SIC.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://d1zx6l1dn8vaj5.cloudfront.net/out/v1/b89cc37caa6d418eb423cf092a2ef970/index.m3u8"
    },
    {
        "name": "RTP 3",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/RTP3.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://streaming-live.rtp.pt/liverepeater/smil:rtpnHD.smil/playlist.m3u8"
    },
    {
        "name": "SIC Notícias",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/SIC-Notícias.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://sicnot.live.impresa.pt/sicnot.m3u8"
    },
    {
        "name": "CNN Portugal",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/CNN-Portugal.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://video-auth7.iol.pt/live_cnn/live_cnn/playlist.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9OC8yOS8yMDI0IDI6NjozNCBQTSZoYXNoX3ZhbHVlPVBtazczeGRFd1M3RTJ3RGEzOXVCYUE9PSZ2YWxpZG1pbnV0ZXM9MTQ0MCZpZD0xY2RjYmUxZS02NThhLTQ2NzYtYTJhMi01MGVmZTZlMDg1OTI=/"
    },
    {
        "name": "Euronews PT",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/Euronews.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://0ff3c09c7580460e8e018cdcaacbadee.mediatailor.us-east-1.amazonaws.com/v1/manifest/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/RakutenTV-pt_EuroNewsLive/de58ab88-b103-4df8-b87a-71190e6f9482/5.m3u8"
    },
    {
        "name": "ARTV",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/ARTV.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://playout175.livextend.cloud/livenlin4/_definst_/2liveartvpub2/playlist.m3u8"
    },
    {
        "name": "RTP Memória",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/RTP-Memória.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://streaming-live.rtp.pt/liverepeater/smil:rtpmem.smil/playlist.m3u8"
    },
    {
        "name": "RTP Açores",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/RTP-Açores.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://streaming-live.rtp.pt/liverepeater/smil:rtpacoresHD.smil/playlist.m3u8"
    },
    {
        "name": "RTP Madeira",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/RTP-Madeira.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://streaming-live.rtp.pt/liverepeater/smil:rtpmadeira.smil/playlist.m3u8"
    },
    {
        "name": "RTP África",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/RTP-África.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://streaming-live.rtp.pt/liverepeater/smil:rtpafrica.smil/playlist.m3u8"
    },
    {
        "name": "RTP Internacional",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/RTP-Internacional.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://streaming-live.rtp.pt/liverepeater/smil:rtpi.smil/playlist.m3u8"
    },
    {
        "name": "V+ TVI",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/vmaistvi.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://video-auth2.iol.pt/live_vmais/live_vmais/edge_servers/vmais-720p/playlist.m3u8"
    },
    {
        "name": "SIC Novelas",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/SIC-Novelas.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://production-fast-sic.content.okast.tv/fa2e8c4385712f9ae705b449477523ec/channels/d9070446-8448-455e-8075-773b1ba12562/f083c6ea-33af-458e-82c5-f27f6b42f9ec/media_.m3u8"
    },
    {
        "name": "SIC Replay",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/SIC-Replay.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://production-fast-sic.content.okast.tv/fa2e8c4385712f9a7dce4ff2dcebac2e/channels/d9070446-8448-455e-8075-773b1ba12562/d47eae0f-ad77-414a-9a1d-2a6628ba18c3/media_.m3u8"
    },
    {
        "name": "SIC Alta Definição",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/SIC-Alta-Definição.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://production-fast-sic.content.okast.tv/fa2e8c4385712f9aa54bbe52b1bd9b6b/channels/d9070446-8448-455e-8075-773b1ba12562/fc831b20-f252-4e7d-8cc5-2d05f4d43c1c/media_.m3u8"
    },
    {
        "name": "Porto Canal",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/Porto-Canal.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://bcovlive-a.akamaihd.net/34ec8f209dcc48dda853aca054c97ab2/eu-west-1/6415811594001/playlist_dvr.m3u8"
    },
    {
        "name": "Fama TV",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/Fama-TV.jpg",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://204280.global.ssl.fastly.net/64cd4f589272294ee667108d/live_2f24d2e05bfd11eeb524673aae68b8ac/playlist.m3u8"
    },
    {
        "name": "Camões TV",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/CamoesTV.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://customer-3s66icmlj6pe1jxm.cloudflarestream.com/5591a95d07ca3d04141053f912543447/manifest/video.m3u8"
    },
    {
        "name": "MyTime Movie Network (BR)",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/My-Time-Movie-Network.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://appletree-mytime-samsungbrazil.amagi.tv/playlist.m3u8"
    },
    {
        "name": "Love Nature TV",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/Love-Nature-TV.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://d18dyiwu97wm6q.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/LoveNature4K2-prod/playlist.m3u8"
    },
    {
        "name": "Canal Futura",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/Canal-Futura.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://tv.unisc.br/hls/test.m3u8"
    },
    {
        "name": "AgroBrasil TV",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/AgroBrasil-TV.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://server.flixtv.com.br/agrobrasiltv/agrobrasiltv/chunklist.m3u8"
    },
    {
        "name": "Euronews EN",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/Euronews.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://rakuten-euronews-9-gb.lg.wurl.tv/playlist.m3u8"
    },
    {
        "name": "teleSUR",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://directostv.teleame.com/wp-content/uploads/2016/04/Telesur-en-vivo-Online.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://cdnesmain.telesur.ultrabase.net/mbliveMain/hd/playlist.m3u8"
    },
    {
        "name": "+TeleSUR-English",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/Telesur.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://cdnenmain.telesur.ultrabase.net/mblivev3/hd/playlist.m3u8"
    },
    {
        "name": "HispanTV",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/HispanTV.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://live.presstv.ir/hls/hispantv.m3u8"
    },
    {
        "name": "Press TV",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/Press-TV.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://live.presstv.ir/hls/presstv.m3u8"
    },
    {
        "name": "Free Speech TV",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/Free-Speech-TV.webp",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://edge.fstv-live-linear-channel.top.comcast.net/Content/HLS_HLSv3/Live/channel(b168a609-19c1-2203-ae1d-6b9726f05e67)/index.m3u8"
    },
    {
        "name": "RT News",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/RT-News.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://rumble-foxo.cdn.rumble.cloud/live/hr6yv36f/slot-4/mxtm-wdfe_1080p/playlist.m3u8"
    },
    {
        "name": "CGTN",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/CGTN.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://english-livetx.cgtn.com/hls/yypdyyctzb_hd.m3u8"
    },
    {
        "name": "CGTN Español",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/CGTN-Español.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://espanol-livews.cgtn.com/hls/LSveOGBaBw41Ea7ukkVAUdKQ220802LSTexu6xAuFH8VZNBLE1ZNEa220802cd/playlist.m3u8"
    },
    {
        "name": "CGTN Français",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/CGTN-Français.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://francais-livews.cgtn.com/hls/LSvev95OuFZtKLc6CeKEFYXj220802LSTeV6PO0Ut9r71Uq3k5goCA220802cd/playlist.m3u8"
    },
    {
        "name": "CGTN Documentary",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/CGTN-Documentary.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://english-livetx.cgtn.com/hls/yypdjlctzb_hd.m3u8"
    },
    {
        "name": "Al Jazeera English",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/Al-Jazeera.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://live-hls-web-aje.getaj.net/AJE/01.m3u8"
    },
    {
        "name": "France 24 English",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/France-24.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://ythls.armelin.one/channel/UCQfwfsi5VrQ8yKZ-UWmAEFg.m3u8"
    },
    {
        "name": "France 24 Español",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/France-24.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://youtube.com/watch?v=XDJPzMznAjU"
    },
    {
        "name": "France 24 Français",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/France-24.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://youtube.com/watch?v=gxG3pdKvlIs"
    },
    {
        "name": "France 24 Arabic",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/France-24.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://youtube.com/watch?v=8BZpOolYLUA"
    },
    {
        "name": "CNN",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/CNN.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://cnn-cnninternational-1-eu.rakuten.wurl.tv/playlist.m3u8"
    },
    {
        "name": "ABC News",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/ABC-News.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://content.uplynk.com/channel/3324f2467c414329b3b0cc5cd987b6be.m3u8"
    },
    {
        "name": "CBS News",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/CBSN.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://cbsn-us.cbsnstream.cbsnews.com/out/v1/55a8648e8f134e82a470f83d562deeca/master.m3u8"
    },
    {
        "name": "NBC News Now",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/NBC-News-Now.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "http://dai2.xumo.com/xumocdn/p=roku/amagi_hls_data_xumo1212A-xumo-nbcnewsnow/CDN/playlist.m3u8"
    },
    {
        "name": "Sky News",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/Sky-News.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://linear417-gb-hls1-prd-ak.cdn.skycdp.com/100e/Content/HLS_001_1080_30/Live/channel(skynews)/index_1080-30.m3u8"
    },
    {
        "name": "TRT World",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/TRT_World.svg",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://tv-trtworld.medya.trt.com.tr/master.m3u8"
    },
    {
        "name": "NASA TV Public",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/NASA.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://ntv1.akamaized.net/hls/live/2014075/NASA-NTV1-HLS/master.m3u8"
    },
    {
        "name": "NASA TV Media",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/NASA.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://ntv2.akamaized.net/hls/live/2013923/NASA-NTV2-HLS/master.m3u8"
    },
    {
        "name": "Bloomberg TV Europe",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/Bloomberg.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://8c916ce141544c85a361e55898216cf0.mediatailor.us-east-1.amazonaws.com/v1/manifest/04fd913bb278d8775298c26fdca9d9841f37601f/RakutenTV-eu_Bloomberg-2/22e25f0b-ff48-4517-9faa-35f78c10f563/0.m3u8"
    },
    {
        "name": "Bloomberg TV",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/Bloomberg.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://liveprodusphoenixeast.akamaized.net/USPhx-HD/Channel-TX-USPhx-AWS-virginia-1/Source-USPhx-16k-1-s6lk2-BP-07-03-0Yn1cQZHOtP_live.m3u8"
    },
    {
        "name": "NHK World Japan",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/NHK-World.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://cdn.nhkworld.jp/www11/nhkworld-tv/domestic/2003459/live.m3u8"
    },
    {
        "name": "Arirang TV",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/Arirang_TV.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://amdlive-ch01-g-ctnd-com.akamaized.net/arirang_1gch/smil:arirang_1gch.smil/playlist.m3u8"
    },
    {
        "name": "KBS World",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/KBS-World.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://kbsworld-ott.akamaized.net/hls/live/2002341/kbsworld/master.m3u8"
    },
    {
        "name": "Deutsche Welle",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/Deutsche-Welle.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8"
    },
    {
        "name": "Deutsche Welle Español",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/Deutsche-Welle.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://dwamdstream104.akamaized.net/hls/live/2015530/dwstream104/index.m3u8"
    },
    {
        "name": "Deutsche Welle Arabic",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/Deutsche-Welle.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://dwamdstream103.akamaized.net/hls/live/2015526/dwstream103/index.m3u8"
    },
    {
        "name": "TV5 Monde Info",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/TV5-Monde-Info.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://ott.tv5monde.com/Content/HLS/Live/channel(info)/variant.m3u8"
    },
    {
        "name": "BFM TV",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/BFM-TV.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://live-cdn-stream-euw1.bfmtv.bct.nextradiotv.com/master.m3u8"
    },
    {
        "name": "BFM Business",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/BFM-Business.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://ncdn-live-bfm.pfd.sfr.net/shls/LIVE$BFM_BUSINESS/index.m3u8?start=LIVE&end=END"
    },
    {
        "name": "TVE 24h",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/TVE-24h.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://rtvelivestream.akamaized.net/rtvesec/24h/24h_main.m3u8"
    },
    {
        "name": "La 1",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/La1.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://rtvelivestream.akamaized.net/rtvesec/la1/la1_main.m3u8"
    },
    {
        "name": "La 2",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/La2.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://rtvelivestream-clnx.rtve.es/rtvesec/la2/la2_main.m3u8"
    },
    {
        "name": "TV Galicia",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/TVG.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://crtvg-europa.flumotion.cloud/playlist.m3u8"
    },
    {
        "name": "ETB 1",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/ETB-1.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://multimedia.eitb.eus/live-content/etb1hd-hls/index.m3u8"
    },
    {
        "name": "ETB 2",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/ETB-2.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://multimedia.eitb.eus/live-content/etb2hd-hls/index.m3u8"
    },
    {
        "name": "EITB Basque",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/EITB-EUS.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://multimedia.eitb.eus/live-content/eitbbasque-hls/master.m3u8"
    },
    {
        "name": "Canal Extremadura",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/Canal-Extremadura.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://cdnapisec.kaltura.com/p/5581662/sp/558166200/playManifest/entryId/1_1u7ssdy3/protocol/https/format/applehttp/flavorIds/1_8xbndriw/a.m3u8"
    },
    {
        "name": "Cubavisión Internacional",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/Cubavisión-Internacional.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://cdn.teveo.cu/live/video/A36pWmuWvZBQskuZ/ngrp:gppfydfzpSUn9Udy.stream/playlist.m3u8"
    },
    {
        "name": "Sky TG24",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/Sky-TG24.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://youtube.com/watch?v=HVB_Wx5T16g"
    },
    {
        "name": "Rai News 24",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/Rai-News-24.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://8e7439fdb1694c8da3a0fd63e4dda518.msvdn.net/rainews1/hls/playlist_mo.m3u8"
    },
    {
        "name": "Nick Clássico",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/Nick-Clássico.jpg",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "http://stitcher-ipv4.pluto.tv/v1/stitch/embed/hls/channel/5f12151794c1800007a8ae63/master.m3u8?advertisingId={PSID}&appVersion=unknown&deviceDNT={TARGETOPT}&deviceId={PSID}&deviceLat=0&deviceLon=0&deviceMake=samsung&deviceModel=samsung&deviceType=samsung-tvplus&deviceVersion=unknown"
    },
    {
        "name": "BabyFirst",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/BabyFirst.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "http://stitcher-ipv4.pluto.tv/v1/stitch/embed/hls/channel/5f4fb4cf605ddf000748e16f/master.m3u8?advertisingId={PSID}&appVersion=unknown&deviceDNT={TARGETOPT}&deviceId={PSID}&deviceLat=0&deviceLon=0&deviceMake=samsung&deviceModel=samsung&deviceType=samsung-tvplus&deviceVersion=unknown"
    },
    {
        "name": "Retrô Cartoon",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/Retro-TV.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://stmv1.srvif.com/retrotv/retrotv/playlist.m3u8"
    },
    {
        "name": "Gulli",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/Gulli.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://origin-caf900c010ea8046.live.6cloud.fr/out/v1/c65696b42ca34e97a9b5f54758d6dd50/cmaf/hlsfmp4_short_q2hyb21h_gulli_sd_index.m3u8"
    },
    {
        "name": "Trace Urban",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/TRACE-Urban.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://lightning-traceurban-samsungau.amagi.tv/playlist.m3u8"
    },
    {
        "name": "Trace Latina",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/TRACE-Latina.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01131-tracetv-tracelatinaes-samsungspain/playlist.m3u8"
    },
    {
        "name": "Clubbing TV",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/Clubbing-TV.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://clubbingtv-rakuten.amagi.tv/playlist.m3u8"
    },
    {
        "name": "DeeJay TV",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/DeeJay-TV.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://streamcdng5-4c4b867c89244861ac216426883d1ad0.msvdn.net/live/S85984808/sMO0tz9Sr2Rk/playlist.m3u8"
    },
    {
        "name": "4Fun.TV",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/4Fun-TV.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://stream.4fun.tv:8888/hls/4f_high/index.m3u8"
    },
    {
        "name": "Sexy KPOP TV",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/Sexy-KPOP-TV.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://ssh101-fl.bozztv.com/ssh101/kpoptv/playlist.m3u8"
    },
    {
        "name": "Motorvision",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/Motorvision-TV.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://d39g1vxj2ef6in.cloudfront.net/v1/manifest/3fec3e5cac39a52b2132f9c66c83dae043dc17d4/prod-rakuten-stitched/152ce4a1-aa15-4761-ae5b-d4f13449c1b9/4.m3u8"
    },
    {
        "name": "Abu Dhabi Sports 1",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/Abu-Dhabi-Sports-1.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://vo-live.cdb.cdn.orange.com/Content/Channel/AbuDhabiSportsChannel1/HLS/variant.m3u8"
    },
    {
        "name": "Abu Dhabi Sports 2",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/Abu-Dhabi-Sports-2.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://vo-live.cdb.cdn.orange.com/Content/Channel/AbuDhabiSportsChannel2/HLS/variant.m3u8"
    },
    {
        "name": "Dubai Sports",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/Dubai-Sports.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://dmitnthfrta.cdn.mgmlcdn.com/dubaisports/smil:dubaisports.stream.smil/chunklist.m3u8"
    },
    {
        "name": "Dubai Sports 2",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/Dubai-Sports-2.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://dmitwlvvll.cdn.mangomolo.com/dubaisportshd/smil:dubaisportshd.smil/index.m3u8"
    },
    {
        "name": "Dubai Sports 3",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/Dubai-Sports-3.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "http://dmitwlvvll.cdn.mangomolo.com/dubaisportshd5/smil:dubaisportshd5.smil/index.m3u8"
    },
    {
        "name": "Fashion TV",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/Fashion-TV.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://fashiontv-fashiontv-1-eu.rakuten.wurl.tv/playlist.m3u8"
    },
    {
        "name": "HD Fashion & Lifestyle TV",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/HD-Fashion-&-Lifestyle-TV.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://www.youtube.com/watch?v=i646uhJwP5w"
    },
    {
        "name": "World Fashion Channel",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/World-Fashion-Channel.jpg",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://cdn.wfc.tv/cdn/stream-eng.m3u8"
    },
    {
        "name": "ICI Television",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/ICI-Television.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://amdici.akamaized.net/hls/live/873426/ICI-Live-Stream/master.m3u8"
    },
    {
        "name": "BFM Grand Lille",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/Grand-Lille-TV.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://ncdn-live-bfm.pfd.sfr.net/shls/LIVE$BFMGRANDLILLE/index.m3u8?start=LIVE&end=END"
    },
    {
        "name": "BFM Grand Littoral TV",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/Grand-Littoral-TV.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://ncdn-live-bfm.pfd.sfr.net/shls/LIVE$BFMGRANDLITTORAL/index.m3u8?start=LIVE&end=END"
    },
    {
        "name": "Das Erste",
        "tag": "TV",
        "type": "Not registered",
        "icon": "https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/Das-Erste.png",
        "lang": "Not registered",
        "reg": "Not registered",
        "content": "https://daserste-live.ard-mcdn.de/daserste/live/hls/de/master.m3u8"
    },
    {
        "name": "Anime TV",
        "tag": "TV",
        "type": "Anime",
        "icon": "https://play-lh.googleusercontent.com/z_90JYTZ0UUAm5LhWzlJMFlT7xs08qss7HZ1UNf40bxJdRWj3x-9NzvW3eChEWBtSLU",
        "lang": "PT",
        "reg": "BR",
        "content": "https://stmv1.srvif.com/animetv/animetv/playlist.m3u8"
    },
    {
        "name": "TvCidade",
        "tag": "TV",
        "type": "geral",
        "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1S1wxHxAEdpVrqIezP_TTbjiIDbcFTpnjQQ&s",
        "lang": "PT",
        "reg": "CV",
        "content": "https://stmv1.srvif.com/tvcidade/tvcidade/playlist.m3u8"
    },
    {
        "name": "++TeleSurtv",
        "tag": "TV",
        "type": "Geral",
        "icon": "https://directostv.teleame.com/wp-content/uploads/2016/04/Telesur-en-vivo-Online.png",
        "lang": "ES",
        "reg": "Not registered",
        "content": "https://cdnesmain.telesur.ultrabase.net/mbliveMain/hd/playlist.m3u8"
    },
    {
        "name": "TVI",
        "tag": "TV",
        "type": "Geral",
        "icon": "https://upload.wikimedia.org/wikipedia/commons/2/24/Log%C3%B3tipo_TVI.png",
        "lang": "pt",
        "reg": "pt",
        "content": "https://video-auth6.iol.pt/edge_servers/tviinternacional-480p/chunks.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9OS8yOS8yMDI0IDQ6MTk6NiBBTSZoYXNoX3ZhbHVlPXczcjJySXhnM0c5SDhnRVhDM09aOUE9PSZ2YWxpZG1pbnV0ZXM9MTQ0MCZpZD0xMGNiNzVkMC02N2E3LTQxNTktOTRjZC0yMTU4ODNmZjI2NjA="
    },
    {
        "name": "My Time",
        "tag": "TV",
        "type": "filmes&séries",
        "icon": "https://th.bing.com/th/id/OIP._ya7z4cmQjB8drZLV0PrCQHaHZ?rs=1&pid=ImgDetMain",
        "lang": "pt",
        "reg": "br",
        "content": "https://appletree-mytime-samsungbrazil.amagi.tv/playlist720p.m3u8"
    },
    {
        "name": "Filmes Nacionais",
        "tag": "TV",
        "type": "filmes&séries",
        "icon": "https://images.pluto.tv/channels/5f5a545d0dbf7f0007c09408/colorLogoPNG.png",
        "lang": "pt",
        "reg": "br",
        "content": "https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5f5a545d0dbf7f0007c09408/master.m3u8?deviceId=channel&deviceModel=web&deviceVersion=1.0&appVersion=1.0&deviceType=rokuChannel&deviceMake=rokuChannel&deviceDNT=1"
    },
    {
        "name": "MoviesSphere",
        "tag": "TV",
        "type": "filmes&séries",
        "icon": "https://i.pinimg.com/736x/d3/99/00/d39900fa8c2574fd429afd30f5fc5128.jpg",
        "lang": "pt",
        "reg": "br",
        "content": "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01264-vidaausainc-moviesperebr-vidaa/playlist.m3u8"
    },
    {
        "name": "Runtime Action",
        "tag": "TV",
        "type": "filmes&séries",
        "icon": "https://raw.githubusercontent.com/inspirationlinks/m3u/refs/heads/live/LogosTv/RunTime.webp",
        "lang": "pt",
        "reg": "br",
        "content": "https://d3vx6kwn4pkd9t.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-fj2q06aizeppd-prod/run/rt_ra/rt_ra.m3u8"
    },
    {
        "name": "Tv RunTime",
        "tag": "TV",
        "type": "filmes, series, desenhos, anime",
        "icon": "https://raw.githubusercontent.com/inspirationlinks/m3u/refs/heads/live/LogosTv/RunTime.webp",
        "lang": "pt",
        "reg": "br",
        "content": "https://d3vx6kwn4pkd9t.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-fj2q06aizeppd-prod/run/rt_br/rt_br.m3u8"
    },
    {
        "name": "Tv Conven",
        "tag": "TV",
        "type": "Doc",
        "icon": "https://www.jornalismogospel.com.br/logo_conven_pequeno.jpg",
        "lang": "pt",
        "reg": "br",
        "content": "https://stmv1.srvif.com/tvconven/tvconven/chunklist_w1746833580.m3u8"
    },
    {
        "name": "1001 Noites",
        "tag": "TV",
        "type": "Entertainment",
        "icon": "https://cdn-icons-png.flaticon.com/512/3003/3003543.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//cdn.jmvstream.com/w/LVW-8155/ngrp%3aLVW8155_41E1ciuCvO_all/chunklist.m3u8"
    },
    {
        "name": "Adesso TV",
        "tag": "TV",
        "type": "General",
        "icon": "https://cdn-icons-png.flaticon.com/512/3003/3003543.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//cdn.jmvstream.com/w/LVW-9715/LVW9715_12B26T62tm/playlist.m3u8"
    },
    {
        "name": "Agro Brasil TV",
        "tag": "TV",
        "type": "Agriculture",
        "icon": "https://cdn-icons-png.flaticon.com/512/2990/2990471.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//server.flixtv.com.br/agrobrasiltv/agrobrasiltv/playlist.m3u8"
    },
    {
        "name": "Aish TV",
        "tag": "TV",
        "type": "Religious",
        "icon": "https://cdn-icons-png.flaticon.com/512/3176/3176366.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//srv2.zcast.com.br/elzemar/elzemar/playlist.m3u8"
    },
    {
        "name": "All Sports",
        "tag": "TV",
        "type": "Sports",
        "icon": "https://cdn-icons-png.flaticon.com/512/53/53283.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//5cf4a2c2512a2.streamlock.net/dgrau/dgrau/playlist.m3u8"
    },
    {
        "name": "Allegro Web TV",
        "tag": "TV",
        "type": "Web TV",
        "icon": "https://cdn-icons-png.flaticon.com/512/3003/3003543.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//livefocamundo.com%3a8081/allegrowebtv/index.m3u8"
    },
    {
        "name": "Alpha Channel",
        "tag": "TV",
        "type": "General",
        "icon": "https://cdn-icons-png.flaticon.com/512/3003/3003543.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//5b01a3d32b65c.streamlock.net%3a1936/tvalpha/tvalpha/playlist.m3u8"
    },
    {
        "name": "Amazon Sat",
        "tag": "TV",
        "type": "Regional",
        "icon": "https://cdn-icons-png.flaticon.com/512/684/684908.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//amazonsat.brasilstream.com.br/hls/amazonsat/index.m3u8"
    },
    {
        "name": "Animestation",
        "tag": "TV",
        "type": "Animation",
        "icon": "https://cdn-icons-png.flaticon.com/512/3003/3003691.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//stmv.video.expressolider.com.br/animestation1/animestation1/playlist.m3u8"
    },
    {
        "name": "Antares Televisión",
        "tag": "TV",
        "type": "General",
        "icon": "https://cdn-icons-png.flaticon.com/512/3003/3003543.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//5c3fb01839654.streamlock.net%3a1963/iptvantares/liveantarestv/playlist.m3u8"
    },
    {
        "name": "Araruna TV",
        "tag": "TV",
        "type": "Local",
        "icon": "https://cdn-icons-png.flaticon.com/512/684/684908.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//video01.logicahost.com.br/ararunatv/ararunatv/playlist.m3u8"
    },
    {
        "name": "Ascame TV",
        "tag": "TV",
        "type": "General",
        "icon": "https://cdn-icons-png.flaticon.com/512/3003/3003543.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//livefocamundo.com%3a8081/ascametv/index.m3u8"
    },
    {
        "name": "Assembleia Legislativa do Estado de Mato Grosso",
        "tag": "TV",
        "type": "Government",
        "icon": "https://cdn-icons-png.flaticon.com/512/1995/1995515.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//streaming.al.mt.gov.br/test/index.m3u8"
    },
    {
        "name": "AWTV",
        "tag": "TV",
        "type": "General",
        "icon": "https://cdn-icons-png.flaticon.com/512/3003/3003543.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//acesso.ecast.site%3a3070/live/awtvlive.m3u8"
    },
    {
        "name": "Band Minas",
        "tag": "TV",
        "type": "Regional",
        "icon": "https://cdn-icons-png.flaticon.com/512/684/684908.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//evpp.mm.uol.com.br%3a1935/bandpracas/debatemg/playlist.m3u8"
    },
    {
        "name": "BDC TV",
        "tag": "TV",
        "type": "General",
        "icon": "https://cdn-icons-png.flaticon.com/512/3003/3003543.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//srv1.zcast.com.br/bdctv/bdctv/playlist.m3u8"
    },
    {
        "name": "BMTV",
        "tag": "TV",
        "type": "General",
        "icon": "https://cdn-icons-png.flaticon.com/512/3003/3003543.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//srv5.zcast.com.br/bmtv/bmtv/playlist.m3u8"
    },
    {
        "name": "Boa Vontade TV",
        "tag": "TV",
        "type": "Religious",
        "icon": "https://cdn-icons-png.flaticon.com/512/3176/3176366.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//ythls.onrender.com/channel/UCedt33latJW7StRfdF4-1FQ.m3u8"
    },
    {
        "name": "Boas Novas",
        "tag": "TV",
        "type": "Religious",
        "icon": "https://cdn-icons-png.flaticon.com/512/3176/3176366.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//cdn.jmvstream.com/w/LVW-9375/LVW9375_6i0wPBCHYc/playlist.m3u8"
    },
    {
        "name": "C-Ghost",
        "tag": "TV",
        "type": "Horror",
        "icon": "https://cdn-icons-png.flaticon.com/512/2990/2990471.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//stmv.video.expressolider.com.br/ghostv/ghostv/playlist.m3u8"
    },
    {
        "name": "Cadena V!VO",
        "tag": "TV",
        "type": "General",
        "icon": "https://cdn-icons-png.flaticon.com/512/3003/3003543.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//stmv1.voxtvhd.com.br/cadenavivo/cadenavivo/playlist.m3u8"
    },
    {
        "name": "Canal 10 Cabo Frio TV",
        "tag": "TV",
        "type": "Local",
        "icon": "https://cdn-icons-png.flaticon.com/512/684/684908.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//59f2354c05961.streamlock.net%3a1443/ararutv/_definst_/ararutv/playlist.m3u8"
    },
    {
        "name": "Canal 25 Jundiaí",
        "tag": "TV",
        "type": "Local",
        "icon": "https://cdn-icons-png.flaticon.com/512/684/684908.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//stream01.msolutionbrasil.com.br/hls/canal25/live.m3u8"
    },
    {
        "name": "Canal 25 Regional",
        "tag": "TV",
        "type": "Regional",
        "icon": "https://cdn-icons-png.flaticon.com/512/684/684908.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//srv6.zcast.com.br/canalsantarosa/canalsantarosa/playlist.m3u8"
    },
    {
        "name": "Canal 38",
        "tag": "TV",
        "type": "Local",
        "icon": "https://cdn-icons-png.flaticon.com/512/684/684908.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//cdn.jmvstream.com/w/LVW-8503/LVW8503_d0V5oduFlK/playlist.m3u8"
    },
    {
        "name": "Canal 74 San Antonio",
        "tag": "TV",
        "type": "Local",
        "icon": "https://cdn-icons-png.flaticon.com/512/684/684908.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//stmv5.voxtvhd.com.br/canal74hd/canal74hd/playlist.m3u8"
    },
    {
        "name": "Canal do Inter",
        "tag": "TV",
        "type": "Sports",
        "icon": "https://cdn-icons-png.flaticon.com/512/53/53283.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//video01.soultv.com.br/internacional/internacional/playlist.m3u8"
    },
    {
        "name": "Canal Educação",
        "tag": "TV",
        "type": "Educational",
        "icon": "https://cdn-icons-png.flaticon.com/512/3074/3074058.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//canaleducacao-stream.ebc.com.br/index.m3u8"
    },
    {
        "name": "Canal Executivo",
        "tag": "TV",
        "type": "News",
        "icon": "https://cdn-icons-png.flaticon.com/512/2990/2990507.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//stream.novotempo.com/tv/smil%3aexecutivo.smil/chunklist_w1786386513_b628000_slpor.m3u8"
    },
    {
        "name": "Canal Gov",
        "tag": "TV",
        "type": "Government",
        "icon": "https://cdn-icons-png.flaticon.com/512/1995/1995515.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//canalgov-stream.ebc.com.br/index.m3u8"
    },
    {
        "name": "Canal Libras",
        "tag": "TV",
        "type": "Accessibility",
        "icon": "https://cdn-icons-png.flaticon.com/512/3039/3039009.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//canallibras-stream.ebc.com.br/mux_video_ts/index-1.m3u8"
    },
    {
        "name": "Canal Metropolitano de Noticia",
        "tag": "TV",
        "type": "News",
        "icon": "https://cdn-icons-png.flaticon.com/512/2990/2990507.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//video01.logicahost.com.br/redebemtv/redebemtv/playlist.m3u8"
    },
    {
        "name": "Canal Ricos",
        "tag": "TV",
        "type": "Lifestyle",
        "icon": "https://cdn-icons-png.flaticon.com/512/3003/3003543.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//5d82644094cc0.streamlock.net/ricostv/ricostv/playlist.m3u8"
    },
    {
        "name": "Canal Saúde",
        "tag": "TV",
        "type": "Health",
        "icon": "https://cdn-icons-png.flaticon.com/512/3007/3007772.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//arkyvbre1g.zoeweb.tv/fiocruz/fiocruz.stream/playlist.m3u8"
    },
    {
        "name": "Canal TV Rio",
        "tag": "TV",
        "type": "Regional",
        "icon": "https://cdn-icons-png.flaticon.com/512/684/684908.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//video01.logicahost.com.br/canaltvrio/canaltvrio/playlist.m3u8"
    },
    {
        "name": "Canção Nova TV",
        "tag": "TV",
        "type": "Religious",
        "icon": "https://cdn-icons-png.flaticon.com/512/3176/3176366.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//free.fullspeed.tv/iptv-query?streaming-ip=https%3a//www.youtube.com/channel/UCVrKQMmA2ew9LFzeIDaOFgw/live"
    },
    {
        "name": "Caavision",
        "tag": "TV",
        "type": "General",
        "icon": "https://cdn-icons-png.flaticon.com/512/3003/3003543.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//cdn039.fractalmedia.es/hls/caz_pt_high.m3u8"
    },
    {
        "name": "Cartoonito",
        "tag": "TV",
        "type": "Kids",
        "icon": "https://cdn-icons-png.flaticon.com/512/3003/3003691.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//playout.cdn.cartoonnetwork.com.br/playout_04/playlist.m3u8"
    },
    {
        "name": "Castve HD",
        "tag": "TV",
        "type": "General",
        "icon": "https://cdn-icons-png.flaticon.com/512/3003/3003543.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//wowza4.catve.com.br%3a1935/live/livestream/playlist.m3u8"
    },
    {
        "name": "Catve Master TV",
        "tag": "TV",
        "type": "General",
        "icon": "https://cdn-icons-png.flaticon.com/512/3003/3003543.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//5b33b873179a2.streamlock.net%3a1443/mastertv/livestream/playlist.m3u8"
    },
    {
        "name": "Catve 2",
        "tag": "TV",
        "type": "General",
        "icon": "https://cdn-icons-png.flaticon.com/512/3003/3003543.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//5b33b873179a2.streamlock.net%3a1443/catve2/catve2/playlist.m3u8"
    },
    {
        "name": "CBN Rio",
        "tag": "TV",
        "type": "News",
        "icon": "https://cdn-icons-png.flaticon.com/512/2990/2990507.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//medias.sgr.globo.com/hls/vCBNRJ/vCBNRJ.m3u8"
    },
    {
        "name": "CBN São Paulo",
        "tag": "TV",
        "type": "News",
        "icon": "https://cdn-icons-png.flaticon.com/512/2990/2990507.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//medias.sgr.globo.com/hls/vCBNSP/vCBNSP.m3u8"
    },
    {
        "name": "Central TV",
        "tag": "TV",
        "type": "General",
        "icon": "https://cdn-icons-png.flaticon.com/512/3003/3003543.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//tv02.zas.media%3a1936/centraltv/centraltv/playlist.m3u8"
    },
    {
        "name": "Chroma TV",
        "tag": "TV",
        "type": "General",
        "icon": "https://cdn-icons-png.flaticon.com/512/3003/3003543.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//5c483b9d1019c.streamlock.net/8054/8054/playlist.m3u8"
    },
    {
        "name": "Classique TV",
        "tag": "TV",
        "type": "Movies",
        "icon": "https://cdn-icons-png.flaticon.com/512/3039/3039014.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//stmv1.srvif.com/classique/classique/playlist.m3u8"
    },
    {
        "name": "Classique TV 2",
        "tag": "TV",
        "type": "Movies",
        "icon": "https://cdn-icons-png.flaticon.com/512/3039/3039014.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//stmv1.srvif.com/classiquetv1/classiquetv1/playlist.m3u8"
    },
    {
        "name": "Classique TV Western",
        "tag": "TV",
        "type": "Movies",
        "icon": "https://cdn-icons-png.flaticon.com/512/3039/3039014.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//stmv1.srvif.com/classiquew/classiquew/playlist.m3u8"
    },
    {
        "name": "CNN Brasil",
        "tag": "TV",
        "type": "News",
        "icon": "https://cdn-icons-png.flaticon.com/512/2990/2990507.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//free.fullspeed.tv/iptv-query?streaming-ip=https%3a//www.youtube.com/channel/UCvdwhh_fDyWccR42-rReZLw/live"
    },
    {
        "name": "COM Brasil",
        "tag": "TV",
        "type": "General",
        "icon": "https://cdn-icons-png.flaticon.com/512/3003/3003543.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//596639ebdd89b.streamlock.net/8032/8032/playlist.m3u8"
    },
    {
        "name": "ConecTV Brasil",
        "tag": "TV",
        "type": "General",
        "icon": "https://cdn-icons-png.flaticon.com/512/3003/3003543.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//stream01.msolutionbrasil.com.br/hls/conectv/live.m3u8"
    },
    {
        "name": "Conecta+ TV",
        "tag": "TV",
        "type": "General",
        "icon": "https://cdn-icons-png.flaticon.com/512/3003/3003543.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//189.14.239.62%3a1935/webtv/livestream1/playlist.m3u8"
    },
    {
        "name": "Conexão TV",
        "tag": "TV",
        "type": "General",
        "icon": "https://cdn-icons-png.flaticon.com/512/3003/3003543.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//5a57bda70564a.streamlock.net/conexaotv/conexaotv.sdp/playlist.m3u8"
    },
    {
        "name": "Cultura PR Catve",
        "tag": "TV",
        "type": "Culture",
        "icon": "https://cdn-icons-png.flaticon.com/512/3074/3074058.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//wowza4.catve.com.br%3a1935/live/livestream/media.m3u8"
    },
    {
        "name": "CVC",
        "tag": "TV",
        "type": "General",
        "icon": "https://cdn-icons-png.flaticon.com/512/3003/3003543.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//5d00db0e0fcd5.streamlock.net/7034/7034/playlist.m3u8"
    },
    {
        "name": "CWB TV",
        "tag": "TV",
        "type": "Local",
        "icon": "https://cdn-icons-png.flaticon.com/512/684/684908.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//59d39900ebfb8.streamlock.net/cwbtv/cwbtv/playlist.m3u8"
    },
    {
        "name": "Demais TV",
        "tag": "TV",
        "type": "General",
        "icon": "https://cdn-icons-png.flaticon.com/512/3003/3003543.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//stmv1.samcast.com.br/demaistv6503/demaistv6503/playlist.m3u8"
    },
    {
        "name": "Dunas TV",
        "tag": "TV",
        "type": "General",
        "icon": "https://cdn-icons-png.flaticon.com/512/3003/3003543.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//5cf4a2c2512a2.streamlock.net/dunastv/dunastv/playlist.m3u8"
    },
    {
        "name": "DJ Loncho TV",
        "tag": "TV",
        "type": "Music",
        "icon": "https://cdn-icons-png.flaticon.com/512/3039/3039072.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//srv5.zcast.com.br/djlonchtv/djlonchtv/playlist.m3u8"
    },
    {
        "name": "Dreiko TV",
        "tag": "TV",
        "type": "General",
        "icon": "https://cdn-icons-png.flaticon.com/512/3003/3003543.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//stmv3.voxtvhd.com.br/dreikotv/dreikotv/playlist.m3u8"
    },
    {
        "name": "E-Parana",
        "tag": "TV",
        "type": "Educational",
        "icon": "https://cdn-icons-png.flaticon.com/512/3074/3074058.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//200.189.113.201/hls/tve.m3u8"
    },
    {
        "name": "Eduvision",
        "tag": "TV",
        "type": "Educational",
        "icon": "https://cdn-icons-png.flaticon.com/512/3074/3074058.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//stmv3.voxtvhd.com.br/conex2/conex2/playlist.m3u8"
    },
    {
        "name": "El Histonauta TV",
        "tag": "TV",
        "type": "Documentary",
        "icon": "https://cdn-icons-png.flaticon.com/512/3074/3074013.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//stmv1.voxtvhd.com.br/elhistonauta/elhistonauta/playlist.m3u8"
    },
    {
        "name": "Elemental Channel",
        "tag": "TV",
        "type": "Science",
        "icon": "https://cdn-icons-png.flaticon.com/512/3074/3074013.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//5d82644094cc0.streamlock.net/8116/8116/playlist.m3u8"
    },
    {
        "name": "Ely TV",
        "tag": "TV",
        "type": "General",
        "icon": "https://cdn-icons-png.flaticon.com/512/3003/3003543.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//stmv1.srvsite.com/ely/ely/playlist.m3u8"
    },
    {
        "name": "Evavisión",
        "tag": "TV",
        "type": "General",
        "icon": "https://cdn-icons-png.flaticon.com/512/3003/3003543.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//stmv1.zcasthn.com.br/evevision/evevision/playlist.m3u8"
    },
    {
        "name": "Exprezión TV",
        "tag": "TV",
        "type": "General",
        "icon": "https://cdn-icons-png.flaticon.com/512/3003/3003543.png",
        "lang": "ptBR",
        "reg": "Brazil",
        "content": "//srv3.zcast.com.br/expreszion/expreszion/playlist.m3u8"
    }
];

