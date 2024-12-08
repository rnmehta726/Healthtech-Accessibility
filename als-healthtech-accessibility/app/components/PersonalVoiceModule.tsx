import { NativeModules } from 'react-native';

const { PersonalVoiceModule } = NativeModules;

export default {
  isPersonalVoiceAvailable: async () => {
    return await PersonalVoiceModule.isPersonalVoiceAvailable();
  },
  speakWithPersonalVoice: async (text: String) => {
    return await PersonalVoiceModule.speakWithPersonalVoice(text);
  },
};
