var myApp = angular.module('myApp',[]);


myApp.controller('TicketsController', ['$scope', function($scope) {

    $scope.tickets = [
        {
            "origin": "VVO",
            "origin_name": "Владивосток",
            "bus":
                {
                    "model": "Volvo",
                    "number": "FT123-67"
                },
            "destination": "TLV",
            "destination_name": "Тель-Авив",
            "departure_date": "12.05.17",
            "departure_time": "16:20",
            "arrival_date": "12.05.17",
            "arrival_time": "22:10",
            "carrier": "TK",
            "stops": 3,
            "price": 12400.56
        },
        {
            "origin": "VVO",
            "origin_name": "Владивосток",
            "bus":
                {
                    "model": "Volvo",
                    "number": "PX443-45"
                },
            "destination": "TLV",
            "destination_name": "Тель-Авив",
            "departure_date": "12.05.17",
            "departure_time": "17:20",
            "arrival_date": "12.05.17",
            "arrival_time": "23:50",
            "carrier": "S7",
            "stops": 1,
            "price": 13100.25
        },
        {
            "origin": "VVO",
            "origin_name": "Владивосток",
            "bus":
                {
                    "model": "Volvo",
                    "number": "LE179-36"
                },
            "destination": "TLV",
            "destination_name": "Тель-Авив",
            "departure_date": "12.05.17",
            "departure_time": "12:10",
            "arrival_date": "12.05.17",
            "arrival_time": "18:10",
            "carrier": "SU",
            "stops": 0,
            "price": 15300.623
        },
        {
            "origin": "VVO",
            "origin_name": "Владивосток",
            "bus":
                {
                    "model": "Volvo",
                    "number": "AL343-55"
                },
            "destination": "TLV",
            "destination_name": "Тель-Авив",
            "departure_date": "12.05.17",
            "departure_time": "17:00",
            "arrival_date": "12.05.17",
            "arrival_time": "23:30",
            "carrier": "TK",
            "stops": 2,
            "price": 11000.85675
        },
        {
            "origin": "VVO",
            "origin_name": "Владивосток",
            "bus":
                {
                    "model": "Volvo",
                    "number": "AA123-45"
                },
            "destination": "TLV",
            "destination_name": "Тель-Авив",
            "departure_date": "12.05.17",
            "departure_time": "12:10",
            "arrival_date": "12.05.17",
            "arrival_time": "20:15",
            "carrier": "BA",
            "stops": 3,
            "price": 13400.4855
        },
        {
            "origin": "VVO",
            "origin_name": "Владивосток",
            "bus":
                {
                    "model": "Volvo",
                    "number": "SL123-12"
                },
            "destination": "TLV",
            "destination_name": "Тель-Авив",
            "departure_date": "12.05.17",
            "departure_time": "9:40",
            "arrival_date": "12.05.17",
            "arrival_time": "19:25",
            "carrier": "SU",
            "stops": 3,
            "price": 12450.84675
        },
        {
            "origin": "VVO",
            "origin_name": "Владивосток",
            "bus":
                {
                    "model": "Volvo",
                    "number": "MM044-03"
                },
            "destination": "TLV",
            "destination_name": "Тель-Авив",
            "departure_date": "12.05.17",
            "departure_time": "17:10",
            "arrival_date": "12.05.17",
            "arrival_time": "23:45",
            "carrier": "TK",
            "stops": 1,
            "price": 13600
        },
        {
            "origin": "VVO",
            "origin_name": "Владивосток",
            "bus":
                {
                    "model": "Volvo",
                    "number": "MI59-84"
                },
            "destination": "TLV",
            "destination_name": "Тель-Авив",
            "departure_date": "12.05.17",
            "departure_time": "6:10",
            "arrival_date": "12.05.17",
            "arrival_time": "15:25",
            "carrier": "TK",
            "stops": 0,
            "price": 14250
        },
        {
            "origin": "VVO",
            "origin_name": "Владивосток",
            "bus":
                {
                    "model": "Volvo",
                    "number": "AP208-38"
                },
            "destination": "TLV",
            "destination_name": "Тель-Авив",
            "departure_date": "12.05.17",
            "departure_time": "16:50",
            "arrival_date": "12.05.17",
            "arrival_time": "23:35",
            "carrier": "SU",
            "stops": 1,
            "price": 16700.8636
        },
        {
            "origin": "VVO",
            "origin_name": "Владивосток",
            "bus":
                {
                    "model": "Volvo",
                    "number": "DI190-39"
                },
            "destination": "TLV",
            "destination_name": "Тель-Авив",
            "departure_date": "12.05.17",
            "departure_time": "6:10",
            "arrival_date": "12.05.17",
            "arrival_time": "16:15",
            "carrier": "S7",
            "stops": 0,
            "price": 17400.4
        }
    ];
}])