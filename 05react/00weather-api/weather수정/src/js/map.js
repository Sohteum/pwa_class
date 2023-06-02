export const fnGetLatLng = () => {//현재위치정보리턴
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (location) => {
                resolve({
                    lat: location.coords.latitude,
                    lng: location.coords.longitude,
                })
            }//success
            ,
            (error) => {
                if (error.code === 1) alert('위치 접근 권한을 허용해주세요')
                else alert('위치정보 수신중 요류가 발생했습니다')

                throw new Error('에러가 났습니다')//이걸 더 많이 씀
                // reject(new Error('에러가 났습니다'))
            }//failed
        )
    })
}//fnGetLatLng

export const fnInitMap = (latlngObj, fn) => {//위경도를 받아서 구글맵을 출력하는 함수
    const { lat, lng } = latlngObj
    let map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: lat, lng: lng },
        zoom: 8,
        styles: [
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f7f1df"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#d0e3b4"
                    }
                ]
            },
            {
                "featureType": "landscape.natural.terrain",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.medical",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#fbd3da"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#bde6ab"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffe15f"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#efd151"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "black"
                    }
                ]
            },
            {
                "featureType": "transit.station.airport",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#cfb2db"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#a2daf2"
                    }
                ]
            }
        ]
    })//map
    let center = { lat: lat, lng: lng }
    let marker = new window.google.maps.Marker({ position: center, map: map });//항상 윈도우!!

    map.addListener('click', async (e) => {
        const result = window.confirm('해당위치로 날씨정보를 갱신하시겠습니까?')
        if (result) {
            let lat = e.latLng.lat()
            let lng = e.latLng.lng()
            marker.setPosition({ lat, lng })
            //클릭한 위치의 위경도를 받아서 주소, 날씨정보 갱신
            fn({ lat, lng })
        }
    })//click
}//fnInitMap

export const fnGetAddress = (latlngObj, lang) => { //위경도를 받아서 주소를 리턴하는 함수
    return new Promise((resolve) => {
        let geocoder = new window.google.maps.Geocoder;
        let address
        geocoder.geocode({ 'location': latlngObj, 'language' : lang}, function (results, status) {
            try { //try catch구문. 에러가 발생이 되면 캐치문을 이용해서 에러를 내지 않고 아래 문구를 호출하게 됨
                address = `${results[3].formatted_address}` //status가 주소가 없으면 false가 나오는거얌 아니면 주소 리턴
            } catch {// formatted_address정보가 없을경우 예외처리
                address =  (lang==='ko')
                ? `해당위치의 주소가 존재하지 않습니다. 위치를 확인 후 다시 검색해주세요`
                : `Failed to get address information for that location`
              
            }
            resolve(address)
        });//geocode
    })//promise
}//fnGetAddress


// export const fnGetTimezone = (latlngObj) => {
//     return new Promise((resolve) => {
//         const { lat, lng } = latlngObj
//         fetch(
//             `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lng}&timestamp=0&key=${process.env.REACT_APP_OPEN_GOOGLE_KEY}`
//         ).then((data) => { //글자로 들어오니까 스크립트 형태로 바꿔줘야함  //한줄로 해야함 패치할때 여백인식,백틱엔터노노 타임스탬프는 0으로 넣어도 상관없음 없애면 안되고 뭔가 넣긴 해야함

//             resolve(data.json())
//         })
//     })
// }//fnGetTimezone
//지금 필요없음 나중에 쓸일없으면 지우기