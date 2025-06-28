import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import umami from "@yeskunall/astro-umami";


// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'uDevices',
            head: [
            ],
            logo: {
                light: './src/assets/uDevices_logo_short_light.svg',
                dark: './src/assets/uDevices_logo_short_dark.svg',
            },
            social: [
                { icon: 'discord', label: 'Discord', href: 'https://discord.gg/9cbBHxRt' },
                {
                    icon: 'github',
                    label: 'GitHub',
                    href: 'https://github.com/ultimaterobotics',
                },
            ],
            sidebar: [
                {
                    label: 'uDevices',
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: 'Getting started with uDevices', link: '/guides/getting-started-with-udevices/' },
                        { label: 'Quick start - uMyo', link: '/guides/umyo-quick-start/' },
                        { label: 'Quick start - uECG', link: '/guides/uecg-quick-start' },

                    ]
                }
                ,
                {
                    label: 'uMyo',
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: 'uMyo - wearable EMG sensor', link: '/guides/umyo/' },
                        { label: 'Description', link: '/guides/umyo-description-hackaday/' },
                        { label: 'Getting started with uMyo', link: '/guides/umyo-getting-started-hackaday' },
                        { label: 'uMyo - Power On/Off', link: '/guides/umyo-power-on-off-hackaday' },
                        { label: 'uMyo - Using uMyo with bracelet and dry connectors', link: '/guides/umyo-using-bracelet-hackaday' },
                        { label: 'uMyo - Using uMyo with wet electrodes', link: '/guides/umyo-wet-electrodes-hackaday' },
                        { label: 'uMyo - Using uMyo with Arduino/ESP32', link: '/guides/umyo-arduino-hackaday' },
                        { label: 'uMyo - Using 2 uMyo devices', link: '/guides/umyo-2-umyos-hackaday' },
                        { label: 'How to upload uMyo firmware from Windows', link: '/guides/how-to-upload-firmware-on-umyo-windows' },
                        { label: 'Demo projects', link: '/guides/umyo-demo-projects' },

                    ],
                },
                {
                    label: 'uECG',
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: 'uECG - wearable ECG sensor', link: '/guides/uecg/' },
                        { label: 'Description', link: '/guides/uecg-description-hackaday/' },
                        { label: 'uECG - Basic Guide', link: '/guides/uecg-basic-hackaday/' },
                        { label: 'uECG - Using the App', link: '/guides/uecg-the-app-hackaday/' },
                        { label: 'uECG - Desktop App', link: '/guides/uecg-desktop-app-hackaday/' },
                        { label: 'uECG - Wired Firmware Update', link: '/guides/uecg-wired-firmware-hackaday/' },
                        { label: 'uECG - Wireless Firmware Update', link: '/guides/uecg-wireless-firmware-hackaday/' },
                    ]
                },
            ],
            editLink: {
                baseUrl: 'https://github.com/ultimaterobotics/make-udevices-io/edit/main/',
            },
        }),
        umami({ id: "94db1cb1-74f4-4a40-ad6c-962362670409" }),
    ],
});
