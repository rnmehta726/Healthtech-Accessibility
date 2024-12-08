//
//  PersonalVoiceModule.swift
//  alshealthtechaccessibility
//
//  Created by Rohan Mehta on 11/24/24.
//

import Foundation
import React
import AVFoundation

@objc(PersonalVoiceModule)
class PersonalVoiceModule: NSObject {
  
  @objc
  func isPersonalVoiceAvailable(_ resolver: RCTPromiseResolveBlock, rejecter: RCTPromiseRejectBlock) {
    let synthesizer = AVSpeechSynthesizer()
    let voices = AVSpeechSynthesisVoice.speechVoices()
    
    let personalVoices = voices.filter { $0.name.contains("Personal Voice") }
    resolver(!personalVoices.isEmpty)
  }

  @objc
  func speakWithPersonalVoice(_ text: String, resolver: @escaping RCTPromiseResolveBlock, rejecter: @escaping RCTPromiseRejectBlock) {
    let synthesizer = AVSpeechSynthesizer()
    guard let personalVoice = AVSpeechSynthesisVoice.speechVoices().first(where: { $0.name.contains("Personal Voice") }) else {
      rejecter("voice_not_found", "Personal Voice not found", nil)
      return
    }
    
    let utterance = AVSpeechUtterance(string: text)
    utterance.voice = personalVoice
    
    synthesizer.speak(utterance)
    resolver("Speech started")
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return false
  }
}
