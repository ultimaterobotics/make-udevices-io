import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import umami from "@yeskunall/astro-umami";

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        customCss: [
            // Relative path to your custom CSS file
            './src/styles/custom.css',
        ],
        title: 'uDevices',
        head: [
        ],
        logo: {
            light: './src/assets/uDevices_logo_short_light.svg',
            dark: './src/assets/uDevices_logo_short_dark.svg',
        },
        social: [
            { icon: 'discord', label: 'Discord', href: 'https://discord.com/invite/dEmCPBzv9G' },
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
                    { label: 'About uDevices', link: '/guides/getting-started-with-udevices/' },

                ]
            }
            ,
            {
                label: 'uMyo',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: "What's new — March 2026", link: '/guides/whats-new-march-2026' },
                    { label: 'Getting started', link: '/guides/umyo/' },
                    { label: 'Powering and turning on', link: '/guides/powering-umyo' },
                    { label: 'Using with dry electrodes', link: '/guides/umyo-emg-dry-electrodes-bracelet' },
                    { label: 'Using with wet (gel) electrodes', link: '/guides/umyo-wet-electrodes-hackaday' },
                    { label: 'Arduino/ESP32 mode', link: '/guides/umyo-arduino-hackaday' },
                    { label: 'Multiple uMyo sensors', link: '/guides/multiple-umyo-sensors' },
                    { label: 'Firmware upload (Windows)', link: '/guides/how-to-upload-firmware-on-umyo-windows' },
                    { label: 'Flashing firmware via SWD', link: '/guides/firmware-flash-swd' },
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
    }), umami({ id: '793bdf0a-c31b-4df3-a799-406b294845b9' }), icon()],
});