package sortone

func SelectionSort(input []int) []int {
	for i := 0; i < len(input); i++ {
		// find index of min
		minI := i
		for j := i + 1; j < len(input); j++ {
			if input[j] < input[minI] {
				minI = j
			}
		}

		// swap
		tmp := input[i]
		input[i] = input[minI]
		input[minI] = tmp
	}

	return input
}
