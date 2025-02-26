import requests
city_name = 'Lusaka'
API_key = '3e199a94cec7db6b294fa6b38afcff94'
url = f'https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={API_key}&units=metric'



response = requests.get(url)
if response.status_code == 200:
    data = response.json()
    print('weather is', data['weather'][0]['description'])
    print('current Temperature is', data['main']['temp'])
    print('Humidity is', data['main']['humidity'])