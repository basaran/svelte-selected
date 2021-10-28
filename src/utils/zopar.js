import { createDebug } from "$lib/debug";

export const zopar = (node) => {
    const dbg = createDebug("{zopar.js}");
    const debug = dbg;
    debug("using zopar.js");

    // const event = new Event("timetodo");
    // // Listen for the event.
    // node.addEventListener('timetodo', function (e) { /* ... */ }, false);


    // const callback = (records) => {
    //     console.log(records);
    //     records.forEach((record) => {
    //         if (record.attributeName == 'data-felte-validation-message') {
    //             console.log('dispatching');
    //             node.dispatchEvent(event);
    //         }
    //     })
    // };

    // let observer = new MutationObserver(callback);

    // observer.observe(node, {
    //     attributes: true,
    //     childList: true, // observe direct children
    //     subtree: true, // and lower descendants too
    //     characterData: true,
    // });

  
    return {
        destroy() {
            observer.disconnect();
            observer = null;
        },
    };
};
