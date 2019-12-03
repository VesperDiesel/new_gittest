const perform = (anyMethod, wrappers) => {
    wrappers.forEach(wrap => {
        wrap.initialize();
    });
    anyMethod();
    wrappers.forEach(wrap => {
        wrap.close();
    })
}
perform(() => {
    console.log('说话')
}, [{
        //wrapper1
        initialize() {
            console.log('您好1')
        },
        close() {
            console.log('再见1')
        }
    },
    {
        //wrapper2
        initialize() {
            console.log('您好2')
        },
        close() {
            console.log('再见2')
        }
    }
])