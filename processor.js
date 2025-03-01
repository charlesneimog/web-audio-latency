class MyProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
  }

  process(inputs, outputs, parameters) {
    if (inputs.length > 0 && inputs[0].length > 0) {
    }
    // Retorna true para continuar o processamento
    return true;
  }
}

registerProcessor("my-processor", MyProcessor);
