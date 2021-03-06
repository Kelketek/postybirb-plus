const { app } = require('electron');
const fs = require('fs-extra');
const path = require('path');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const util = require('./utils');

const settingsPath = path.join(BASE_DIRECTORY, 'data', 'settings.json');
fs.ensureFileSync(settingsPath);
const adapter = new FileSync(settingsPath);
const settings = low(adapter);
settings
  .defaults({
    advertise: true,
    emptyQueueOnFailedPost: true,
    postRetries: 0,
    openWindowOnStartup: true,
    openOnLogin: false,
    useHardwareAcceleration: !util.isLinux(),
    maxPNGSizeCompression: 50,
    maxPNGSizeCompressionWithAlpha: 60,
    maxJPEGQualityCompression: 15,
    maxJPEGSizeCompression: 50,
    silentNotifications: false,
  })
  .write();

if (!settings.getState().useHardwareAcceleration || util.isLinux()) {
  console.log('Hardware acceleration disabled');
  app.disableHardwareAcceleration();
}

global.settingsDB = settings;
