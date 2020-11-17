var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BH4Y8yxD5tkN5kOBr3DEdHq87Z6ST1HoOi7qRdRiUMyCbCNRqGxwA_iql0_2IP54JlID0THJ7YdSK9nIZd8ajtc",
   "privateKey": "Ms5avN4r7DSOOeYm_dOVsG7uUI1WPa7cAF-ipJIMMxU"
};
 
 
webPush.setVapidDetails(
   'mailto:example@yourdomain.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/fXGYXNCZTgU:APA91bFXMhs10B2xAuei6EL6w5JETv-blerhPQi2GtnHCKvxU75fQIhpl-kwcnF0p56AZAJJdI9e8ogdRlEzhgfe9HG1ejIfGBPas9D5Z4Idp1CI0fBr2qJzPX6foX0uJv_4twmAKUif",
   "keys": {
       "p256dh": "BHbOOZ2ImiL9R1TlpPkUER8RljACmqPef8jogmDCDn5rA6M4Hr5vVtgK79lKEdcHEnTR0DtX5F7uJn4loiQDIHI=",
       "auth": "sZxKY6Q6N/M+xe4nTCXp0A=="
   }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
 
var options = {
   gcmAPIKey: '883634348114',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
);