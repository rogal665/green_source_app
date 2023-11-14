// prettier-ignore
export const getCountrieDetails = async () => {
    let countriesDetails = await fetch('http://greenenergydata19892023.dev-bay.com/countries-capacities');
    countriesDetails = await countriesDetails.json()

    console.log(countriesDetails);



  return [
      {
        "country_code": "AT",
        "powerUnit": "MW",
        "wind_capacity": 87,
        "solar_capacity": 45
      },
      {
        "country_code": "DE",
        "powerUnit": "MW",
        "wind_capacity": 87,
        "solar_capacity": 45
      },
      {
        "country_code": "PL",
        "powerUnit": "MW",
        "wind_capacity": 87,
        "solar_capacity": 45
      },
      {
        "country_code": "CZ",
        "powerUnit": "MW",
        "wind_capacity": 87,
        "solar_capacity": 45
      },
      {
        "country_code": "FR",
        "powerUnit": "MW",
        "wind_capacity": 87,
        "solar_capacity": 45
      },
      {
        "country_code": "SK",
        "powerUnit": "MW",
        "wind_capacity": 87,
        "solar_capacity": 45
      },
      {
        "country_code": "HU",
        "powerUnit": "MW",
        "wind_capacity": 87,
        "solar_capacity": 45
      }
    
    
  ]
};

export const getCountriesData = () => {
    return [
        {
            countryCode: "AT",
            weatherData: [
                {
                    id: "802858e3-eb81-4bc2-9c36-fe63434c2c58",
                    country_code:
                        "AT                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 38,
                    time: "1685577600000",
                    time_iso:
                        "2023-06-01T00:00:00.000Z                                        ",
                },
                {
                    id: "fdbe046e-7300-4682-9b2a-52c90970da71",
                    country_code:
                        "AT                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 40,
                    time: "1685581200000",
                    time_iso:
                        "2023-06-01T01:00:00.000Z                                        ",
                },
                {
                    id: "892f8652-41aa-48e1-a4df-dacc19f86125",
                    country_code:
                        "AT                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 60,
                    time: "1685584800000",
                    time_iso:
                        "2023-06-01T02:00:00.000Z                                        ",
                },
                {
                    id: "d8724d60-08a7-4f78-be1a-32065eb03968",
                    country_code:
                        "AT                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 52,
                    time: "1685588400000",
                    time_iso:
                        "2023-06-01T03:00:00.000Z                                        ",
                },
                {
                    id: "2f637c94-c6fa-4dba-b097-9dbdacc5aaf6",
                    country_code:
                        "AT                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 94,
                    time: "1685592000000",
                    time_iso:
                        "2023-06-01T04:00:00.000Z                                        ",
                },
                {
                    id: "d9949dd2-f5ad-43de-9b78-ff15357b85d4",
                    country_code:
                        "AT                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 50,
                    time: "1685595600000",
                    time_iso:
                        "2023-06-01T05:00:00.000Z                                        ",
                },
                {
                    id: "d66575c9-b9dc-47fc-a8ae-64a8480202a7",
                    country_code:
                        "AT                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 46,
                    time: "1685599200000",
                    time_iso:
                        "2023-06-01T06:00:00.000Z                                        ",
                },
                {
                    id: "5666ab9f-bbf4-4865-8529-389879aecf0a",
                    country_code:
                        "AT                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 38,
                    time: "1685602800000",
                    time_iso:
                        "2023-06-01T07:00:00.000Z                                        ",
                },
                {
                    id: "98894471-f195-432b-a1b8-ff25bf6eed08",
                    country_code:
                        "AT                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 18,
                    time: "1685606400000",
                    time_iso:
                        "2023-06-01T08:00:00.000Z                                        ",
                },
                {
                    id: "a3c9dc7d-d7ae-4863-b47f-a6abf5514c78",
                    country_code:
                        "AT                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 22,
                    time: "1685610000000",
                    time_iso:
                        "2023-06-01T09:00:00.000Z                                        ",
                },
                {
                    id: "8d669dbd-652a-4a74-a3cd-fd4b9dacdae7",
                    country_code:
                        "AT                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 32,
                    time: "1685613600000",
                    time_iso:
                        "2023-06-01T10:00:00.000Z                                        ",
                },
                {
                    id: "4bbb9512-2ae1-45d3-a926-e99ebd5548f0",
                    country_code:
                        "AT                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 46,
                    time: "1685617200000",
                    time_iso:
                        "2023-06-01T11:00:00.000Z                                        ",
                },
                {
                    id: "5bb31105-885c-4743-a554-8a9962bab64a",
                    country_code:
                        "AT                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 30,
                    time: "1685620800000",
                    time_iso:
                        "2023-06-01T12:00:00.000Z                                        ",
                },
                {
                    id: "379fbe97-6ec8-4c01-bc1f-b718ebaec5b8",
                    country_code:
                        "AT                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 14,
                    time: "1685624400000",
                    time_iso:
                        "2023-06-01T13:00:00.000Z                                        ",
                },
                {
                    id: "a5808787-1d51-4d95-b8df-a21bb3d5ea60",
                    country_code:
                        "AT                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 32,
                    time: "1685628000000",
                    time_iso:
                        "2023-06-01T14:00:00.000Z                                        ",
                },
                {
                    id: "8f92d88d-321f-4bf4-bdd7-e246e369baf3",
                    country_code:
                        "AT                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 18,
                    time: "1685631600000",
                    time_iso:
                        "2023-06-01T15:00:00.000Z                                        ",
                },
                {
                    id: "601857fd-9b78-4b9e-a1d8-414645ec0500",
                    country_code:
                        "AT                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 18,
                    time: "1685635200000",
                    time_iso:
                        "2023-06-01T16:00:00.000Z                                        ",
                },
                {
                    id: "42443fea-960c-48fd-8d31-8231e7cba05e",
                    country_code:
                        "AT                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 32,
                    time: "1685638800000",
                    time_iso:
                        "2023-06-01T17:00:00.000Z                                        ",
                },
                {
                    id: "36f66d5e-42ec-474c-8539-3029cd5c98bd",
                    country_code:
                        "AT                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 82,
                    time: "1685642400000",
                    time_iso:
                        "2023-06-01T18:00:00.000Z                                        ",
                },
                {
                    id: "ccd897c0-309c-41c0-a8c1-6c5b753e0831",
                    country_code:
                        "AT                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 48,
                    time: "1685646000000",
                    time_iso:
                        "2023-06-01T19:00:00.000Z                                        ",
                },
                {
                    id: "362c84b2-963b-466c-ac61-fa27a70d5d9d",
                    country_code:
                        "AT                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 62,
                    time: "1685649600000",
                    time_iso:
                        "2023-06-01T20:00:00.000Z                                        ",
                },
                {
                    id: "f23a1b94-1d6f-4d36-b167-170dead272b8",
                    country_code:
                        "AT                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 52,
                    time: "1685653200000",
                    time_iso:
                        "2023-06-01T21:00:00.000Z                                        ",
                },
                {
                    id: "86e89bdb-f53f-43a9-8619-a4a921c74017",
                    country_code:
                        "AT                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 22,
                    time: "1685656800000",
                    time_iso:
                        "2023-06-01T22:00:00.000Z                                        ",
                },
                {
                    id: "be1d20d2-86ae-4dce-82a2-dd027586cf13",
                    country_code:
                        "AT                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 30,
                    time: "1685660400000",
                    time_iso:
                        "2023-06-01T23:00:00.000Z                                        ",
                },
                {
                    id: "95685bc0-c7cb-4915-939c-e6ed66eabb4d",
                    country_code:
                        "AT                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 80,
                    time: "1685664000000",
                    time_iso:
                        "2023-06-02T00:00:00.000Z                                        ",
                },
            ],
        },
        {
            countryCode: "DE",
            weatherData: [
                {
                    id: "802858e3-eb81-4bc2-9c36-fe63434c2c58",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 68,
                    time: "1685577600000",
                    time_iso:
                        "2023-06-01T00:00:00.000Z                                        ",
                },
                {
                    id: "fdbe046e-7300-4682-9b2a-52c90970da71",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 60,
                    time: "1685581200000",
                    time_iso:
                        "2023-06-01T01:00:00.000Z                                        ",
                },
                {
                    id: "892f8652-41aa-48e1-a4df-dacc19f86125",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 80,
                    time: "1685584800000",
                    time_iso:
                        "2023-06-01T02:00:00.000Z                                        ",
                },
                {
                    id: "d8724d60-08a7-4f78-be1a-32065eb03968",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 92,
                    time: "1685588400000",
                    time_iso:
                        "2023-06-01T03:00:00.000Z                                        ",
                },
                {
                    id: "2f637c94-c6fa-4dba-b097-9dbdacc5aaf6",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 104,
                    time: "1685592000000",
                    time_iso:
                        "2023-06-01T04:00:00.000Z                                        ",
                },
                {
                    id: "d9949dd2-f5ad-43de-9b78-ff15357b85d4",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 60,
                    time: "1685595600000",
                    time_iso:
                        "2023-06-01T05:00:00.000Z                                        ",
                },
                {
                    id: "d66575c9-b9dc-47fc-a8ae-64a8480202a7",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 16,
                    time: "1685599200000",
                    time_iso:
                        "2023-06-01T06:00:00.000Z                                        ",
                },
                {
                    id: "5666ab9f-bbf4-4865-8529-389879aecf0a",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 8,
                    time: "1685602800000",
                    time_iso:
                        "2023-06-01T07:00:00.000Z                                        ",
                },
                {
                    id: "98894471-f195-432b-a1b8-ff25bf6eed08",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 8,
                    time: "1685606400000",
                    time_iso:
                        "2023-06-01T08:00:00.000Z                                        ",
                },
                {
                    id: "a3c9dc7d-d7ae-4863-b47f-a6abf5514c78",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 12,
                    time: "1685610000000",
                    time_iso:
                        "2023-06-01T09:00:00.000Z                                        ",
                },
                {
                    id: "8d669dbd-652a-4a74-a3cd-fd4b9dacdae7",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 12,
                    time: "1685613600000",
                    time_iso:
                        "2023-06-01T10:00:00.000Z                                        ",
                },
                {
                    id: "4bbb9512-2ae1-45d3-a926-e99ebd5548f0",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 16,
                    time: "1685617200000",
                    time_iso:
                        "2023-06-01T11:00:00.000Z                                        ",
                },
                {
                    id: "5bb31105-885c-4743-a554-8a9962bab64a",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 20,
                    time: "1685620800000",
                    time_iso:
                        "2023-06-01T12:00:00.000Z                                        ",
                },
                {
                    id: "379fbe97-6ec8-4c01-bc1f-b718ebaec5b8",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 24,
                    time: "1685624400000",
                    time_iso:
                        "2023-06-01T13:00:00.000Z                                        ",
                },
                {
                    id: "a5808787-1d51-4d95-b8df-a21bb3d5ea60",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 12,
                    time: "1685628000000",
                    time_iso:
                        "2023-06-01T14:00:00.000Z                                        ",
                },
                {
                    id: "8f92d88d-321f-4bf4-bdd7-e246e369baf3",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 8,
                    time: "1685631600000",
                    time_iso:
                        "2023-06-01T15:00:00.000Z                                        ",
                },
                {
                    id: "601857fd-9b78-4b9e-a1d8-414645ec0500",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 8,
                    time: "1685635200000",
                    time_iso:
                        "2023-06-01T16:00:00.000Z                                        ",
                },
                {
                    id: "42443fea-960c-48fd-8d31-8231e7cba05e",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 12,
                    time: "1685638800000",
                    time_iso:
                        "2023-06-01T17:00:00.000Z                                        ",
                },
                {
                    id: "36f66d5e-42ec-474c-8539-3029cd5c98bd",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 12,
                    time: "1685642400000",
                    time_iso:
                        "2023-06-01T18:00:00.000Z                                        ",
                },
                {
                    id: "ccd897c0-309c-41c0-a8c1-6c5b753e0831",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 8,
                    time: "1685646000000",
                    time_iso:
                        "2023-06-01T19:00:00.000Z                                        ",
                },
                {
                    id: "362c84b2-963b-466c-ac61-fa27a70d5d9d",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 12,
                    time: "1685649600000",
                    time_iso:
                        "2023-06-01T20:00:00.000Z                                        ",
                },
                {
                    id: "f23a1b94-1d6f-4d36-b167-170dead272b8",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 12,
                    time: "1685653200000",
                    time_iso:
                        "2023-06-01T21:00:00.000Z                                        ",
                },
                {
                    id: "86e89bdb-f53f-43a9-8619-a4a921c74017",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 32,
                    time: "1685656800000",
                    time_iso:
                        "2023-06-01T22:00:00.000Z                                        ",
                },
                {
                    id: "be1d20d2-86ae-4dce-82a2-dd027586cf13",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 40,
                    time: "1685660400000",
                    time_iso:
                        "2023-06-01T23:00:00.000Z                                        ",
                },
                {
                    id: "95685bc0-c7cb-4915-939c-e6ed66eabb4d",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 20,
                    time: "1685664000000",
                    time_iso:
                        "2023-06-02T00:00:00.000Z                                        ",
                },
            ],
        },
        {
            countryCode: "PL",
            weatherData: [
                {
                    id: "802858e3-eb81-4bc2-9c36-fe63434c2c58",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 38,
                    time: "1685577600000",
                    time_iso:
                        "2023-06-01T00:00:00.000Z                                        ",
                },
                {
                    id: "fdbe046e-7300-4682-9b2a-52c90970da71",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 40,
                    time: "1685581200000",
                    time_iso:
                        "2023-06-01T01:00:00.000Z                                        ",
                },
                {
                    id: "892f8652-41aa-48e1-a4df-dacc19f86125",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 60,
                    time: "1685584800000",
                    time_iso:
                        "2023-06-01T02:00:00.000Z                                        ",
                },
                {
                    id: "d8724d60-08a7-4f78-be1a-32065eb03968",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 42,
                    time: "1685588400000",
                    time_iso:
                        "2023-06-01T03:00:00.000Z                                        ",
                },
                {
                    id: "2f637c94-c6fa-4dba-b097-9dbdacc5aaf6",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 74,
                    time: "1685592000000",
                    time_iso:
                        "2023-06-01T04:00:00.000Z                                        ",
                },
                {
                    id: "d9949dd2-f5ad-43de-9b78-ff15357b85d4",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 30,
                    time: "1685595600000",
                    time_iso:
                        "2023-06-01T05:00:00.000Z                                        ",
                },
                {
                    id: "d66575c9-b9dc-47fc-a8ae-64a8480202a7",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 12,
                    time: "1685599200000",
                    time_iso:
                        "2023-06-01T06:00:00.000Z                                        ",
                },
                {
                    id: "5666ab9f-bbf4-4865-8529-389879aecf0a",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 18,
                    time: "1685602800000",
                    time_iso:
                        "2023-06-01T07:00:00.000Z                                        ",
                },
                {
                    id: "98894471-f195-432b-a1b8-ff25bf6eed08",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 18,
                    time: "1685606400000",
                    time_iso:
                        "2023-06-01T08:00:00.000Z                                        ",
                },
                {
                    id: "a3c9dc7d-d7ae-4863-b47f-a6abf5514c78",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 2,
                    time: "1685610000000",
                    time_iso:
                        "2023-06-01T09:00:00.000Z                                        ",
                },
                {
                    id: "8d669dbd-652a-4a74-a3cd-fd4b9dacdae7",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 32,
                    time: "1685613600000",
                    time_iso:
                        "2023-06-01T10:00:00.000Z                                        ",
                },
                {
                    id: "4bbb9512-2ae1-45d3-a926-e99ebd5548f0",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 26,
                    time: "1685617200000",
                    time_iso:
                        "2023-06-01T11:00:00.000Z                                        ",
                },
                {
                    id: "5bb31105-885c-4743-a554-8a9962bab64a",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 30,
                    time: "1685620800000",
                    time_iso:
                        "2023-06-01T12:00:00.000Z                                        ",
                },
                {
                    id: "379fbe97-6ec8-4c01-bc1f-b718ebaec5b8",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 25,
                    time: "1685624400000",
                    time_iso:
                        "2023-06-01T13:00:00.000Z                                        ",
                },
                {
                    id: "a5808787-1d51-4d95-b8df-a21bb3d5ea60",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 22,
                    time: "1685628000000",
                    time_iso:
                        "2023-06-01T14:00:00.000Z                                        ",
                },
                {
                    id: "8f92d88d-321f-4bf4-bdd7-e246e369baf3",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 18,
                    time: "1685631600000",
                    time_iso:
                        "2023-06-01T15:00:00.000Z                                        ",
                },
                {
                    id: "601857fd-9b78-4b9e-a1d8-414645ec0500",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 18,
                    time: "1685635200000",
                    time_iso:
                        "2023-06-01T16:00:00.000Z                                        ",
                },
                {
                    id: "42443fea-960c-48fd-8d31-8231e7cba05e",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 32,
                    time: "1685638800000",
                    time_iso:
                        "2023-06-01T17:00:00.000Z                                        ",
                },
                {
                    id: "36f66d5e-42ec-474c-8539-3029cd5c98bd",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 22,
                    time: "1685642400000",
                    time_iso:
                        "2023-06-01T18:00:00.000Z                                        ",
                },
                {
                    id: "ccd897c0-309c-41c0-a8c1-6c5b753e0831",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 38,
                    time: "1685646000000",
                    time_iso:
                        "2023-06-01T19:00:00.000Z                                        ",
                },
                {
                    id: "362c84b2-963b-466c-ac61-fa27a70d5d9d",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 22,
                    time: "1685649600000",
                    time_iso:
                        "2023-06-01T20:00:00.000Z                                        ",
                },
                {
                    id: "f23a1b94-1d6f-4d36-b167-170dead272b8",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 92,
                    time: "1685653200000",
                    time_iso:
                        "2023-06-01T21:00:00.000Z                                        ",
                },
                {
                    id: "86e89bdb-f53f-43a9-8619-a4a921c74017",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 22,
                    time: "1685656800000",
                    time_iso:
                        "2023-06-01T22:00:00.000Z                                        ",
                },
                {
                    id: "be1d20d2-86ae-4dce-82a2-dd027586cf13",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 43,
                    time: "1685660400000",
                    time_iso:
                        "2023-06-01T23:00:00.000Z                                        ",
                },
                {
                    id: "95685bc0-c7cb-4915-939c-e6ed66eabb4d",
                    country_code:
                        "DE                                                              ",
                    power_type_name:
                        "wind_total                                                      ",
                    power_mw: 30,
                    time: "1685664000000",
                    time_iso:
                        "2023-06-02T00:00:00.000Z                                        ",
                },
            ],
        },
    ];

    /* return {
    countryData: {
      PL: 500,
      DE: 300,
      IT: 1000,
    },
  }; */
};
