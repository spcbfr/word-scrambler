"use client"
import exp from 'constants';
import Link from 'next/link';
import { useState } from 'react'

export default function Home() {
  const [input, setInput] = useState("")
  const [shuffledText, setShuffledText] = useState("")
  function exportAsTXTFile(input: string) {
    const fileData = JSON.stringify(input);
    const blob = new Blob([input], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "shuffled.txt";
    link.href = url;
    link.click();
  }

  function shuffleText() {
    const array = input.split(" ");
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]
      ];
    }

    const final = array.join(" ");
    setShuffledText(final);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    shuffleText();
  }

  return (
    <>
      <h1 className='font-sans font-bold text-2xl mt-6'>Yusuf's Spectacular Word Scrambler</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          name="input"
          className='p-2 border-0 font-medium'
          id="input"
          cols={50}
          rows={5}
          placeholder="Insert some text here and I'll scramble it for you."
          value={input}
          onChange={e => setInput(e.target.value)}
        ></textarea>
        <br />
        <button className='bg-sky-600 p-3 rounded-md text-white font-semibold mt-2' type="submit">Scramble</button>
      </form>
      <div className='w-96 p-2 bg-stone-200 rounded-md'>{shuffledText ? shuffledText : 'Your shuffled text will show up here when you press the shuffle button'}</div>
      {shuffledText ? <button className='text-sky-600 font-semibold' onClick={() => exportAsTXTFile(shuffledText)}>Download Shuffled Text</button> : null}
      <footer>Created by <Link href="https://yusuf.fyi">Yusuf Bouzekri</Link>, you can also find me on <Link href="https://twitter.com/greeklynx">Twitter</Link></footer>
    </>
  )
}
