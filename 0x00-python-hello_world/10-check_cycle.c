#include <stdlib.h>
#include "lists.h"

/**
 * check_cycle - Checks if the linked list contains a cycle.
 * @list: The linked list.
 *
 * Return: 0 If there is no cycle.
 *         -1 If there is a cycle.
 */
int check_cycle(listint_t *list)
{
	listint_t *slow,*fast;

	if (list == NULL || list->next == NULL)
		return (0);

	slow = list->next;
	fast = list->next->next;

	while (slow && fast && fast->next)
	{
		if (slow == fast)
			return (1);

		slow = slow->next;
		fast = fast->next->next;
	}

	return (0);
}
