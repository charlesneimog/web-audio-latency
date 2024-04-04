class LibPd extends AudioWorkletProcessor {
  process(inputs, outputs, parameters) {
    // copy input to output
    for (let channel = 0; channel < inputs[0].length; ++channel) {
      outputs[0][channel].set(inputs[0][channel]);
    }
    return true;
  }
}

registerProcessor("libpd", LibPd);
