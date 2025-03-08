"use client";
import { useEffect } from 'react';


const KeyPressAnnouncer = () => {
  useEffect(() => {
    //console.log("✅ KeyPressAnnouncer component mounted!"); // Debugging log

    const handleKeyPress = (event: KeyboardEvent) => {
     // console.log(`✅ Key pressed: ${event.key}`); // Debugging log

      // Stop any ongoing speech before speaking
      window.speechSynthesis.cancel();

      // Create a speech utterance
      const utterance = new SpeechSynthesisUtterance(`You pressed ${event.key}`);

      // Ensure a voice is selected
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        utterance.voice = voices[0]; // Use the first available voice
      }

      // Speak the key name
      window.speechSynthesis.speak(utterance);
    };

    // Attach event listener
    window.addEventListener("keydown", handleKeyPress);
    //console.log("✅ Keydown event listener added!"); // Debugging log

    return () => {
      //console.log("❌ KeyPressAnnouncer unmounted!"); // Debugging log
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return null;
};

export default KeyPressAnnouncer;
