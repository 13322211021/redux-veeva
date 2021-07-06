export const onButtonItemClick = index => {
    let typeValue = '';
    switch(index) {
        case 1:
            typeValue = 'ERLEADA';
            break;
        case 2:
            typeValue = 'ZYTIGA';
            break;
        default:
            typeValue = 'ALL_PRODUCTS';

    }
    return {type: typeValue};
};

export const onMyAllToggleChange = isMy => {
    let typeValue = '';
    if (isMy) {
        typeValue = 'TOGGLE_MY';
    } else {
        typeValue = 'TOGGLE_ALL';
    }

    return { type: typeValue };
};

export const onMonthWeekToggleChange = isMonth => {
    let typeValue = '';
    if (isMonth) {
        typeValue = 'TOGGLE_MONTH';
    } else {
        typeValue = 'TOGGLE_WEEK';
    }
    
    return { type: typeValue };
};

export const acePriorOnClick = order => {
    let typeValue = '';
    if ('desc' === order) {
        typeValue = 'ACE_DESC';
    } else {
        typeValue = 'ACE_ASC';
    }

    return { type: typeValue };
};

export const onScheduleChange = evt => {
    let typeValue = '';
    if ('prev' === evt) {
        typeValue = 'SCHEDULE_PREV';
    } else {
        typeValue = 'SCHEDULE_NEXT';
    }

    return { type: typeValue };
}

export const onFrequencyChange = evt => {
    let typeValue = '';
    if ('prev' === evt) {
        typeValue = 'FREQUENCY_PREV';
    } else {
        typeValue = 'FREQUENCY_NEXT';
    }

    return { type: typeValue };
}

export const RECEIVE_DATA = { type: 'RECEIVE_DATA' };
