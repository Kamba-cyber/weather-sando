
import requests
import json

def get_weather_data():
    api_key = '3e199a94cec7db6b294fa6b38afcff94'
    city = 'Lusaka'
    url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric'
    response = requests.get(url)
    data = response.json()
    return data

def main():
    data = get_weather_data()
    print(json.dumps(data))
    print('weather is', data['weather'][0]['description'])
    print('current Temperature is', data['main']['temp'])
    print('humidity', data['main']['humidity'])

if __name__ == '__main__':
    main()
