import { Website } from './interfaces/website.interface';
import { Weasyl } from './weasyl/Weasyl';
import { Discord } from './discord/Discord';
import { Furiffic } from './furiffic/Furiffic';
import { Piczel } from './piczel/Piczel';
import { Derpibooru } from './derpibooru/Derpibooru';
import { KoFi } from './kofi/KoFi';
import { Inkbunny } from './inkbunny/Inkbunny';
import { SoFurry } from './sofurry/SoFurry';
import { e621 } from './e621/e621';

export class WebsiteRegistry {
  static readonly websites: Record<string, Website> = {
    Derpibooru: new Derpibooru(),
    Discord: new Discord(),
    e621: new e621(),
    Furiffic: new Furiffic(),
    KoFi: new KoFi(),
    Inkbunny: new Inkbunny(),
    Piczel: new Piczel(),
    SoFurry: new SoFurry(),
    Weasyl: new Weasyl()
  };

  static getAllAsArray() {
    return Object.values(WebsiteRegistry.websites).sort((a, b) => a.name.localeCompare(b.name));
  }

  static find(website: string): Website | undefined {
    const search = website.toLowerCase();
    return Object.values(WebsiteRegistry.websites).find(
      w => w.name.toLowerCase() === search || w.internalName.toLowerCase() === search
    );
  }
}
