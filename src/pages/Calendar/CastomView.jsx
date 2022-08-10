import { sliceEvents, createPlugin } from '@fullcalendar/core';

const CustomViewConfig = {

    classNames: ['custom-view'],

    content: function (props) {
        // let segs = sliceEvents(props, true); // allDay=true
        // props.dateProfile.currentRangeUnit === 'month'
        console.log(props.dateProfile)
        console.log(props.dateProfile.currentRange.start.toUTCString())

        return (
            <>

                <div>hello</div>
            </>
        )
    }

}

export default createPlugin({
    views: {
        custom: CustomViewConfig
    }
});