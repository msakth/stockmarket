import moment from 'moment-timezone';

const dateConverter = () => {

    return {

        toStandardDateDisplay: (targetDate) => {
            return moment(targetDate).format('DD/MM/YYYY');
        },

        toStandardLongDateAnd24HrTimeDisplay: (targetDate) => {
            return moment(targetDate).format('DD/MM/YYYY HH:mm:ss');
        },

        toLongDateAnd24HrTimeDisplay: (targetDate) => {
            return moment(targetDate).format('dddd DD/MM/YYYY');
        },

    };
};

export {
    dateConverter as DateConverter
};


