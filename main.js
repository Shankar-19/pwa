if('serviceWorker' in navigator) {
    window.addEventListener('load', event => {
        // registering the service worker when page loads
        navigator.serviceWorker.register('/sw.js')
        .then(response => console.log('service worker registered!')) //
    })
}

const options = {
    body: 'This message is from demo wolf site',
    icon: "/icons/wolf.png",
     // vibrate pattern for mobiles: (100ms on) 50ms off (100ms on)
    vibrate: [100, 50, 100],
    actions: [
        {action: 'go', title: "Go to the site", icon: '/icons/tick.png'},
        {action: 'stop', title: 'cancel', icon: '/icons/cancel.png'}
    ],
}

// permission for notification
Notification.requestPermission(status => console.log(status))
navigator.serviceWorker.getRegistration()
.then(reg => {
    reg.showNotification("Have a nice day!", options)
})