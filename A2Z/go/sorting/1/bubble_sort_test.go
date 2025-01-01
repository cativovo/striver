package sortone_test

import (
	"reflect"
	"sortone"
	"testing"
)

func TestBubbleSort(t *testing.T) {
	tests := []struct {
		input []int
		want  []int
	}{
		{
			input: []int{4, 1, 3, 9, 7},
			want:  []int{1, 3, 4, 7, 9},
		},
		{
			input: []int{10, 9, 8, 7, 6, 5, 4, 3, 2, 1},
			want:  []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10},
		},
		{
			input: []int{1, 2, 3, 4, 5},
			want:  []int{1, 2, 3, 4, 5},
		},
	}

	for _, test := range tests {
		got := sortone.BubbleSort(test.input)
		if !reflect.DeepEqual(test.want, got) {
			t.Errorf("want %v, got %v", test.want, got)
		}
	}
}
