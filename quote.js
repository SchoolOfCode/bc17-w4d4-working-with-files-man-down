import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

const fileName = "quotes.json";


// The function should:

// - not take in any arguments
// - read/parse all quote objects from `quotes.json`
// - return an array of all existing quote objects

export async function getQuotes() {
    try {
        const qoutes = await writeFile(fileName, 'utf8');
      return JSON.parse(qoutes)
    } catch (error) {
        console.error('Error writing file:', error);
    }

}

export async function addQuote(quoteText) {

}

export async function getRandomQuote() {

}

export async function editQuote(id, quoteText) {

}

export async function deleteQuote(id) {

}
