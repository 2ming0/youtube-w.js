const body = document.body

const TopBar = () => {
    const top_bar = document.createElement('header')
    const top_left = document.createElement("div")
    const top_center = document.createElement("div")
    const top_right = document.createElement("div")

    const menu = document.createElement("button")
    const menu_img = document.createElement("img")
    const youtube_logo = document.createElement("button")
    const youtube_logo_img = document.createElement("img")

    const search_box = document.createElement("div")
    const search_box_input = document.createElement("input")
    const search_box_keyboard = document.createElement("button")
    const search_box_keyboard_img = document.createElement("img")
    const search_magnifier = document.createElement("div")
    const search_magnifier_img = document.createElement("img")
    const search_mic = document.createElement("button")
    const search_mic_img = document.createElement("img")

    const user_upload = document.createElement("button")
    const user_upload_img = document.createElement("img")
    const user_alarm = document.createElement("button")
    const user_alarm_img = document.createElement("img")
    const user_profile = document.createElement("button")
    const user_profile_img = document.createElement("img")

    body.appendChild(top_bar)

    top_bar.appendChild(top_left)
    top_bar.appendChild(top_center)
    top_bar.appendChild(top_right)

    top_left.appendChild(menu)
    top_left.appendChild(youtube_logo)

    menu.appendChild(menu_img)
    youtube_logo.appendChild(youtube_logo_img)

    top_center.appendChild(search_box)
    search_box.appendChild(search_box_input)
    search_box.appendChild(search_box_keyboard)
    search_box_keyboard.appendChild(search_box_keyboard_img)

    top_center.appendChild(search_magnifier)
    search_magnifier.appendChild(search_magnifier_img)
    top_center.appendChild(search_mic)
    search_mic.appendChild(search_mic_img)

    top_right.appendChild(user_upload)
    user_upload.appendChild(user_upload_img)
    top_right.appendChild(user_alarm)
    user_alarm.appendChild(user_alarm_img)
    top_right.appendChild(user_profile)
    user_profile.appendChild(user_profile_img)

    menu_img.src = "img/menu.png"
    youtube_logo_img.src = "img/youtube_logo.png"

    search_box_keyboard_img.src = "img/keyboard.png"
    search_magnifier_img.src = "img/magnifier.png"
    search_mic_img.src = "img/mic.png"

    user_upload_img.src = "img/upload.png"
    user_alarm_img.src = "img/alarm.png"
    user_profile_img.src = "img/profile.png"

    search_box_input.placeholder = '검색'

    top_left.className = 'top_left'
    top_center.className = 'top_center'
    top_right.className = 'top_right'

    menu.className = 'menu'
    menu_img.className = 'menu_img'
    youtube_logo.className = 'youtube_logo'
    youtube_logo_img.className = 'youtube_logo_img'

    search_box.className = 'search_box'
    search_box_input.className = 'search_box_input'
    search_box_keyboard.className = 'search_box_keyboard'
    search_box_keyboard_img.className = 'search_box_keyboard_img'
    search_magnifier.className = 'search_magnifier'
    search_magnifier_img.className = 'search_magnifier_img'
    search_mic.className = 'search_mic'
    search_mic_img.className = 'search_mic_img'

    // user_upload.className = 'user_upload'
    // user_upload_img.className = 'user_upload_img'
    // user_alarm.className = 'user_alarm'
    // user_alarm_img.className = 'user_alarm_img'
    // user_profile.className = 'user_profile'
    // user_profile_img.className = 'user_profile_img'

    user_upload.className = 'top_right_div'
    user_alarm.className = 'top_right_div'
    user_profile.className = 'top_right_div'

    user_upload_img.className = 'top_right_img'
    user_alarm_img.className = 'top_right_img'
    user_profile_img.className = 'top_right_img'

    menu.addEventListener("click", menuEvent, true)
}

const NavSimple = () => {
    const nav_simple = document.createElement("nav")
    const home = document.createElement("button")
    const home_img = document.createElement("img")
    const home_text = document.createElement("a")
    const shorts = document.createElement("button")
    const shorts_img = document.createElement("img")
    const shorts_text = document.createElement("a")
    const subscribe = document.createElement("button")
    const subscribe_img = document.createElement("img")
    const subscribe_text = document.createElement("a")
    const storage = document.createElement("button")
    const storage_img = document.createElement("img")
    const storage_text = document.createElement("a")

    body.appendChild(nav_simple)

    nav_simple.appendChild(home)
    home.appendChild(home_img)
    home.appendChild(home_text)
    nav_simple.appendChild(shorts)
    shorts.appendChild(shorts_img)
    shorts.appendChild(shorts_text)
    nav_simple.appendChild(subscribe)
    subscribe.appendChild(subscribe_img)
    subscribe.appendChild(subscribe_text)
    nav_simple.appendChild(storage)
    storage.appendChild(storage_img) 
    storage.appendChild(storage_text)

    home_img.src = "img/home.png"
    shorts_img.src = "img/shorts.png"
    subscribe_img.src = "img/subscribe.png"
    storage_img.src = "img/storage.png"
    
    home_text.innerHTML = "홈"
    shorts_text.innerHTML = "Shorts"
    subscribe_text.innerHTML = "구독"
    storage_text.innerHTML = "보관함"

    // home.className = 'home'
    // home_img.className = 'home_img'
    // shorts.className = 'shorts'
    // shorts_img.className = 'shorts_img'
    // subscribe.className = 'subscribe'
    // subscribe_img.className = 'subscribe_img'
    // storage.className = 'storage'
    // storage_img.className = 'storage_img'

    nav_simple.className = 'nav_simple'
    home.className = 'nav_simple_btn'
    shorts.className = 'nav_simple_btn'
    subscribe.className = 'nav_simple_btn'
    storage.className = 'nav_simple_btn'

    home_img.className = 'nav_simple_img'
    shorts_img.className = 'nav_simple_img'
    subscribe_img.className = 'nav_simple_img'
    storage_img.className = 'nav_simple_img'

    home_text.className = 'nav_simple_text'
    shorts_text.className = 'nav_simple_text'
    subscribe_text.className = 'nav_simple_text'
    storage_text.className = 'nav_simple_text'
}

const NavDetail = () => {
    const nav_detail = document.createElement("nav")
    const home_detail = document.createElement("button")
    const home_detail_img = document.createElement("img")
    const home_detail_text = document.createElement("a")
    const shorts_detail = document.createElement("button")
    const shorts_detail_img = document.createElement("img")
    const shorts_detail_text = document.createElement("a")
    const subscribe_detail = document.createElement("button")
    const subscribe_detail_img = document.createElement("img")
    const subscribe_detail_text = document.createElement("a")
    const storage_detail = document.createElement("button")
    const storage_detail_img = document.createElement("img")
    const storage_detail_text = document.createElement("a")

    body.appendChild(nav_detail)

    nav_detail.appendChild(home_detail)
    home_detail.appendChild(home_detail_img)
    home_detail.appendChild(home_detail_text)
    nav_detail.appendChild(shorts_detail)
    shorts_detail.appendChild(shorts_detail_img)
    shorts_detail.appendChild(shorts_detail_text)
    nav_detail.appendChild(subscribe_detail)
    subscribe_detail.appendChild(subscribe_detail_img)
    subscribe_detail.appendChild(subscribe_detail_text)
    nav_detail.appendChild(storage_detail)
    storage_detail.appendChild(storage_detail_img)
    storage_detail.appendChild(storage_detail_text)

    home_detail_img.src = "img/home.png"
    shorts_detail_img.src = "img/shorts.png"
    subscribe_detail_img.src = "img/subscribe.png"
    storage_detail_img.src = "img/storage.png"

    home_detail_text.innerHTML = "홈"
    shorts_detail_text.innerHTML = "Shorts"
    subscribe_detail_text.innerHTML = "구독"
    storage_detail_text.innerHTML = "보관함"

    nav_detail.className = 'nav_detail'
}

const Video = () => {

    const video = [
        {"thumbnail":"img/이미지1.png", "profile_img":"img/프로필1.png", "title":"[Playlist] 영화 속 OST 재즈 피아노 커버 모음 🎷🎬✨", "uploader":"왜자꾸날Piano", "hits":"조회수 161만회 ⦁ ", "posted_date":"2개월 전"},
        {"thumbnail":"img/이미지2.png", "profile_img":"img/프로필2.png", "title":"[플리] 듣기만 해도 기분 좋아지는 살랑살랑 통통튀는 노래 모음", "uploader":"조거북", "hits":"조회수 254만회 ⦁ ", "posted_date":"8개월 전"},
        {"thumbnail":"img/이미지3.png", "profile_img":"img/프로필3.png", "title":"💕디즈니 OST 피아노 연주 모음 Part 2 ", "uploader":"몽키비지엠 MONKEYBGM", "hits":"조회수 59만회 ⦁ ", "posted_date":"3개월 전"},
        {"thumbnail":"img/이미지4.png", "profile_img":"img/프로필4.png", "title":"[Playlist] 영화 속 올드팝 피아노 커버 모음 🎧✨", "uploader":"왜자꾸날Piano", "hits":"조회수 14만회 ⦁ ", "posted_date":"2개월 전"},
        {"thumbnail":"img/이미지5.png", "profile_img":"img/프로필5.png", "title":"[Playlist] 카페에 자리가 없었던 당신에게", "uploader":"공일공", "hits":"조회수 1만회 ⦁ ", "posted_date":"5일 전"},
        {"thumbnail":"img/이미지6.png", "profile_img":"img/프로필6.png", "title":"playlist / 유난히 길고 짜증났던 오늘을 풀어줄 음악들", "uploader":"my little room", "hits":"조회수 19만회 ⦁ ", "posted_date":"2개월 전"},
        {"thumbnail":"img/이미지7.png", "profile_img":"img/프로필7.png", "title":"| playlist | 듣다보면 추억처럼 지나가는 명곡 드라마 OST 모음", "uploader":"뮤집 Mᴜᴢɪᴘ", "hits":"조회수 26만회 ⦁ ", "posted_date":"3주 전"},
        {"thumbnail":"img/이미지8.png", "profile_img":"img/프로필8.png", "title":"𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 장마래요🌧 이제 장마철이래서… 비오는 날 듣기 좋은 노래 모음", "uploader":"Eunbi", "hits":"조회수 11만회 ⦁ ", "posted_date":"3주 전"}
    ]

    const main = document.createElement("main")
    body.appendChild(main)

    video.forEach(value => {

        const {thumbnail, profile_img, title, uploader, hits, posted_date} = value

        const video_player = document.createElement('div')
        const thumbnail_img = document.createElement('img')

        const video_info = document.createElement('div')
        const info_profile_title = document.createElement('div')
        const info_profile = document.createElement('img')
        const info_title_box = document.createElement('div')
        const info_title = document.createElement('a')

        const info_uploader_box = document.createElement('div')
        const info_uploader = document.createElement('a')

        const info_hits_date = document.createElement('div')
        const info_hits = document.createElement('a')  
        const info_date = document.createElement('a')    
        
        video_player.appendChild(thumbnail_img)
        video_player.appendChild(video_info)
        
        video_info.appendChild(info_profile_title)
        info_profile_title.appendChild(info_profile)
        info_profile_title.appendChild(info_title_box)
        info_title_box.appendChild(info_title)
        

        video_info.appendChild(info_uploader_box)
        info_uploader_box.appendChild(info_uploader)

        video_info.appendChild(info_hits_date)
        info_hits_date.appendChild(info_hits)
        info_hits_date.appendChild(info_date)

        thumbnail_img.src = thumbnail
        info_profile.src = profile_img

        info_title.innerHTML = title
        info_uploader.innerHTML = uploader
        info_hits.innerHTML = hits
        info_date.innerHTML = posted_date
        
        video_player.className = 'video_player'
        thumbnail_img.className = 'thumbnail_img'

        video_info.className = 'video_info'
        info_profile_title.className = 'info_profile_title'
        info_profile.className = 'info_profile'
        info_title_box.className = 'info_title_box'
        info_title.className = 'info_title'

        info_uploader_box.className = 'info_uploader_box'
        info_uploader.className = 'info_uploader'

        info_hits_date.className = 'info_hits_date'
        info_hits.className = 'info_hits'
        info_date.className = 'info_date'

        main.appendChild(video_player)
    })

}

const menuEvent = () => {

}


window.onload = () => {
    TopBar()
    NavSimple()
    Video()
}