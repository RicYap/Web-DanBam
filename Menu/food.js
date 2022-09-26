$(".promo").hide()

var currImg = $(".promo").first()
var currIdx = 0 
currImg.show()

$("#kanan").click(function(){
    currImg.hide()

    if(currIdx == $(".promo").length-1){
        currIdx = 0
        currImg = $(".promo").first()
    }else{
        currIdx += 1
        currImg = currImg.next()
    }

    currImg.show()
})

$("#kiri").click(function(){
    currImg.hide()

    if(currIdx == 0){
        currIdx = $(".promo").length-1
        currImg = $(".promo").last()
    }else{
        currIdx -= 1
        currImg = currImg.prev()
    }

    currImg.show()
})

$(".card-lm").hide()

var currentImage = $(".card-lm").first()
var currentIndex = 0 
currentImage.show()

$("#menu-kanan").click(function(){
    currentImage.hide()

    if(currentIndex == $(".card-lm").length-1){
        currentIndex = 0
        currentImage = $(".card-lm").first()
    }else{
        currentIndex += 1
        currentImage = currentImage.next()
    }

    currentImage.show()
})

$("#menu-kiri").click(function(){
    currentImage.hide()

    if(currentIndex == 0){
        currentIndex = $(".card-lm").length-1
        currentImage = $(".card-lm").last()
    }else{
        currentIndex -= 1
        currentImage = currentImage.prev()
    }

    currentImage.show()
})