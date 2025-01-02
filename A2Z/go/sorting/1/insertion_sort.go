package sortone

func InsertionSort(input []int) []int {
	for i := 0; i < len(input); i++ {
		j := i
		for j > 0 && input[j] < input[j-1] {
			tmp := input[j-1]
			input[j-1] = input[j]
			input[j] = tmp
			j--
		}
	}

	return input
}
