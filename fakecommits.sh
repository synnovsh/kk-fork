#!/bin/bash
echo "fake1" >> frontend/fake1.txt
git add frontend/fake1.txt
git commit -m "fake commit 1"

echo "fake2" >> frontend/fake2.txt
git add frontend/fake2.txt
git commit -m "fake commit 2"

echo "fake3" >> frontend/fake3.txt
git add frontend/fake3.txt
git commit -m "fake commit 3"
