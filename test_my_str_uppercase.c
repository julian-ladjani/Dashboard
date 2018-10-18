/*
** EPITECH PROJECT, 2018
** test_my_str_upercase
** File description:
** 
*/

#include <stdio.h>

//Implemente ici la donction manquante pour faire fonctionner le programme


void my_str_upper_case(char *str)
{
    int i = 0;

    while (str[i] != '\0') {
        if (is_lowercase(str))
            str[i] = str[i] - 'a' + 'A';
	i++;
    }
}

int main(void)
{
    char *str = "Ceci est un text à mettre en majuscule";

    printf("Voici ton texte en majuscule :\n\t %s\n", str);
    return (0);
}
