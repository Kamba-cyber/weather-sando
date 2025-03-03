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
    print('Weather is:', data['weather'][0]['description'])
    print('Current Temperature:', data['main']['temp'], '°C')
    print('Current Humidity:', data['main']['humidity'], '%')
    print('Current Wind Speed:', data['wind']['speed'], 'mph')
    print('Current Pressure:', data['main']['pressure'], 'hPa')

if __name__ == '__main__':
    main()
