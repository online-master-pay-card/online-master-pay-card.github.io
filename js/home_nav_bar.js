// 

if (homePanel != null) {
    switch (homePanel) {
        case 'transfer_panel':
            highLightNavBar('side_panel_transfer', 'panel_transfer_icon', 'transfer_panel');
        break;

        case 'cards_panel':
            highLightNavBar('side_panel_cards', 'panel_card_icon', 'cards_panel');
        break;

        case 'activities_panel':
            highLightNavBar('side_panel_activities', 'panel_activities_icon', 'activities_panel');
        break;

        case 'profile_panel':
            highLightNavBar('side_panel_profile', 'panel_profile_icon', 'profile_panel');
        break;
    
        default:
            highLightNavBar('side_panel_home', 'panel_home_icon', 'home_panel');
        break;
    }
}
else{

    highLightNavBar('side_panel_home', 'panel_home_icon', 'home_panel');
}

function highLightNavBar(list, icon, display) {
    // 
    function mobileView() {
        $(".panel_container").hide()
        $(`#${display}`).show()
    }


    if($(window).innerWidth() <= 400) {
            mobileView()
            // 
            $(`#${list}`).css({"background-color":"white", "color":"black", "width":"30px", "height":"30px", "padding":"2px", "border-radius":"50%"});

            // 
            $(`#${icon}`).css({"width":"23px"})
    }
    else if($(window).innerWidth() <= 500) {
            mobileView()
            // 
            $(`#${list}`).css({"background-color":"white", "color":"black", "width":"40px", "height":"40px", "padding":"2px", "border-radius":"50%"});

            // 
            $(`#${icon}`).css({"width":"25px"})
    }
    else if($(window).innerWidth() <= 650) {
            mobileView()
            // 
            $(`#${list}`).css({"background-color":"white", "color":"black", "width":"70px", "height":"70px", "padding":"2px", "border-radius":"50%"});

            // 
            $(`#${list} a`).css({"flex-direction":"column", "font-weight":"bold"})

            // 
            $(`#${icon}`).css({"width":"30px"})
     }
     else if($(window).innerWidth() <= 1030){
            mobileView()
            // 
            $(`#${list}`).css({"background-color":"white", "color":"black", "width":"80px", "height":"80px", "padding":"2px", "border-radius":"50%"});

            // 
            $(`#${list} a`).css({"flex-direction":"column", "font-weight":"bold"})

            // 
            $(`#${icon}`).css({"width":"30px"})
     }
}