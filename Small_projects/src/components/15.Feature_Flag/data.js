const dummyApiResponse = {
    show_tictactoe: false,
    show_lightandDark: true,
    show_RandomColourGenerator: true,
    show_Accordian: true
}

function featureFlagsDataServiceCall() {
    return new Promise((resolve, reject) => {
        if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 50);
        else reject('some error occured please try again later');
    })
}

export default featureFlagsDataServiceCall;