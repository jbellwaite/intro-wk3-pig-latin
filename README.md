The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels
	Example input: 3
	Example output: 3

The program adds “way” to single-letter words beginning with a vowel
	Example input: i
	Example output: iway

The program adds “way” to multi-letter words beginning with a vowel
	Example input: alone
	Example output: aloneway

The program takes the first consonant, moves it to the end of the word, and adds “ay” onto it for words that begin with a single consonant
	Example input: to
	Example output: otay

The program takes all consonants before the first vowel, moves them to the end of the word, and adds “ay” onto it for words that begin with more than one consonant
	Example input: two
	Example output: otway

The program will move q and u to the end of the word and add “ay” onto it if they are next to each at the beginning of a word that begins with consonants
	Example input: quick
	Example output: ickquay

The program will move y to the end and add “ay” onto it if a word begins with y
	Example input: yellow
	Example output: ellowyay
