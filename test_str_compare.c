/*
** EPITECH PROJECT, 2018
** 
** File description:
** 
*/

#include <stdio.h>

//Pour cet exercice vous etes autorisé à utiliser une fonction de la lib c que vous avez deja recodé (exemples : strcat, strlen, putchar ect ...)

// Dans cette exercice on veut afficher le mot venant en premier dans l'ordre ascii
// Le main peut crasher dans certains cas, reglez ces problemes !

void print_first_one_in_ascii(char *word1, char *word2)
{
	if (word1 < word2)
		printf("%s\n", word1);
	else
		printf("%s\n", word2);
}

int main(int ac, char **av)
{
	char *str1;
	char *str2;

	str1 = av[1];
	str2 = av[2];
	print_first_one_in_ascii(str1, str2);
}
