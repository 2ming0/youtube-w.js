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

    search_box_input.placeholder = '??????'

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
    
    home_text.innerHTML = "???"
    shorts_text.innerHTML = "Shorts"
    subscribe_text.innerHTML = "??????"
    storage_text.innerHTML = "?????????"

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

    home_detail_text.innerHTML = "???"
    shorts_detail_text.innerHTML = "Shorts"
    subscribe_detail_text.innerHTML = "??????"
    storage_detail_text.innerHTML = "?????????"

    nav_detail.className = 'nav_detail'
}

const Video = () => {

    const video = [
        {"thumbnail":"img/?????????1.png", "profile_img":"img/?????????1.png", "title":"[Playlist] ?????? ??? OST ?????? ????????? ?????? ?????? ???????????", "uploader":"????????????Piano", "hits":"????????? 161?????? ??? ", "posted_date":"2?????? ???"},
        {"thumbnail":"img/?????????2.png", "profile_img":"img/?????????2.png", "title":"[??????] ????????? ?????? ?????? ???????????? ???????????? ???????????? ?????? ??????", "uploader":"?????????", "hits":"????????? 254?????? ??? ", "posted_date":"8?????? ???"},
        {"thumbnail":"img/?????????3.png", "profile_img":"img/?????????3.png", "title":"????????????? OST ????????? ?????? ?????? Part 2 ", "uploader":"??????????????? MONKEYBGM", "hits":"????????? 59?????? ??? ", "posted_date":"3?????? ???"},
        {"thumbnail":"img/?????????4.png", "profile_img":"img/?????????4.png", "title":"[Playlist] ?????? ??? ????????? ????????? ?????? ?????? ???????", "uploader":"????????????Piano", "hits":"????????? 14?????? ??? ", "posted_date":"2?????? ???"},
        {"thumbnail":"img/?????????5.png", "profile_img":"img/?????????5.png", "title":"[Playlist] ????????? ????????? ????????? ????????????", "uploader":"?????????", "hits":"????????? 1?????? ??? ", "posted_date":"5??? ???"},
        {"thumbnail":"img/?????????6.png", "profile_img":"img/?????????6.png", "title":"playlist / ????????? ?????? ???????????? ????????? ????????? ?????????", "uploader":"my little room", "hits":"????????? 19?????? ??? ", "posted_date":"2?????? ???"},
        {"thumbnail":"img/?????????7.png", "profile_img":"img/?????????7.png", "title":"| playlist | ???????????? ???????????? ???????????? ?????? ????????? OST ??????", "uploader":"?????? M???????????", "hits":"????????? 26?????? ??? ", "posted_date":"3??? ???"},
        {"thumbnail":"img/?????????8.png", "profile_img":"img/?????????8.png", "title":"???????????????????????????????? ???????????????? ?????? ????????????????????? ????????? ??? ?????? ?????? ?????? ??????", "uploader":"Eunbi", "hits":"????????? 11?????? ??? ", "posted_date":"3??? ???"}
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