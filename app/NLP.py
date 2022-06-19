from transformers import T5Tokenizer, AutoModelForCausalLM

def gptTransformer(message):
    model_name = "rinna/japanese-gpt2-medium"
    tokenizer = T5Tokenizer.from_pretrained(model_name)
    model = AutoModelForCausalLM.from_pretrained(model_name)

    text = message

    input_ids = tokenizer.encode(
        text,
        return_tensors="pt"
    )
    input_ids

    length = 3
    temperature = 1.0
    k = 0
    p = 0.9
    repetition_penalty = 1.0
    num_return_sequences = 3

    output_sequences = model.generate(
        input_ids=input_ids,
        max_length=length + len(text),
        temperature=temperature,
        top_k=k,
        top_p=p,
        repetition_penalty=repetition_penalty,
        do_sample=True,
        num_return_sequences=num_return_sequences,
    )
    output_sequences

    generated_sequences = []
    for generated_sequence_idx, generated_sequence in enumerate(output_sequences):
        print(f"=== GENERATED SEQUENCE {generated_sequence_idx + 1} ===")
        generated_sequence = generated_sequence.tolist()

        #Decode Text
        DecodeText = tokenizer.decode(generated_sequence, clean_up_tokenization_spaces=True)

        total_sequence = (
            DecodeText[len(tokenizer.decode(input_ids[0], clean_up_tokenization_spaces=True)) :]
        )

        generated_sequences.append(total_sequence)
        return total_sequence