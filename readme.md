# Billboard Hot 100 Charts
Get Billboard hot 100 data in JSON format

# API Documentation

## Get chart for current date:

    https://billboard-hot-100-api.onrender.com/charts

  ## Example Response

    {"songs": [{"rank": 1,"title": "Imma Be","artist": "The Black Eyed Peas","cover": "[https://charts-static.billboard.com/img/1998/07/the-black-eyed-peas-f5s-180x180.jpg](https://charts-static.billboard.com/img/1998/07/the-black-eyed-peas-f5s-180x180.jpg)","position": {"positionLastWeek": 3,"peakPosition": 1,"weeksOnChart": 12}},{"rank": 2,"title": "TiK ToK","artist": "Ke$ha","cover": "[https://charts-static.billboard.com/img/1840/12/kesha-iom-180x180.jpg](https://charts-static.billboard.com/img/1840/12/kesha-iom-180x180.jpg)","position": {"positionLastWeek": 1,"peakPosition": 1,"weeksOnChart": 20}},{"rank": 3,"title": "BedRock","artist": "Young Money Featuring Lloyd","cover": "[https://charts-static.billboard.com/img/2009/10/young-money-7wj-180x180.jpg](https://charts-static.billboard.com/img/2009/10/young-money-7wj-180x180.jpg)","position": {"positionLastWeek": 4,"peakPosition": 3,"weeksOnChart": 13}},

Get Data from a custom date:

    https://billboard-hot-100-api.onrender.com/charts?date=2011-01-02

    //date format of YY-MM-DD

## Development
Clone the project

    git clone https://github.com/n3-rd/Billboard-Hot-100-API.git
Install dependencies

    Yarn
or

    npm install

Development mode can be started with

    yarn dev

   or


    npm run dev
