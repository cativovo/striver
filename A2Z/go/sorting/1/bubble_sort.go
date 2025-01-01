package sortone

func BubbleSort(input []int) []int {
	for i := 0; i < len(input); i++ {
		for j := 1; j < len(input)-i; j++ {
			prevJ := j - 1
			if input[prevJ] > input[j] {
				tmp := input[j]
				input[j] = input[prevJ]
				input[prevJ] = tmp
			}
		}
	}

	return input
}
