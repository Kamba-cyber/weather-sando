from get_weather_data import get_weather_data, city_name


def main():
    input("Lusaka: ")
    weather_data = get_weather_data(Lusaka,'3e199a94cec7db6b294fa6b38afcff94')

    if weather_data:
        print('Weather is:', weather_data['weather'][0]['description'])
    else:
        print('Failed to retrieve weather data.')

if _name_ == "_main_":
    main()
