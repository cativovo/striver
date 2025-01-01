package sortone_test

import (
	"reflect"
	"sortone"
	"testing"
)

func TestSelectionSort(t *testing.T) {
	tests := []struct {
		input []int
		want  []int
	}{
		{
			input: []int{10, 9, 8, 7, 6, 5, 4, 3, 2, 1},
			want:  []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10},
		},
		{
			input: []int{38, 31, 20, 14, 30},
			want:  []int{14, 20, 30, 31, 38},
		},
	}

	for _, test := range tests {
		got := sortone.SelectionSort(test.input)
		if !reflect.DeepEqual(test.want, got) {
			t.Errorf("want %v, got %v", test.want, got)
		}
	}
}
