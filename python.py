import random

# Define the number of dice and faces
DICE_COUNT = 5
DIE_FACES = 6

# Define the different categories and their associated scores
CATEGORIES = {
    "ones": 1,
    "twos": 2,
    "threes": 3,
    "fours": 4,
    "fives": 5,
    "sixes": 6,
    "pair": 7,
    "two pairs": 8,
    "three of a kind": 9,
    "four of a kind": 10,
    "full house": 11,
    "small straight": 12,
    "large straight": 13,
    "chance": 14,
    "yatzy": 15
}

# Define the rules for each category
def score_category(category, dice):
    # Count the number of times each face appears
    counts = [0] * DIE_FACES
    for die in dice:
        counts[die - 1] += 1
    
    # Check for a yatzy
    if category == "yatzy":
        for count in counts:
            if count == DICE_COUNT:
                return 50
        return 0
    
    # Check for a small straight
    if category == "small straight":
        if counts == [1, 1, 1, 1, 0] or counts == [0, 1, 1, 1, 1]:
            return 15
        return 0
    
    # Check for a large straight
    if category == "large straight":
        if counts == [1, 1, 1, 1, 1]:
            return 20
        return 0
    
    # Check for a full house
    if category == "full house":
        has_three = False
        has_two = False
        for count in counts:
            if count == 3:
                has_three = True
            elif count == 2:
                has_two = True
        if has_three and has_two:
            return sum(dice)
        return 0
    
    # Check for four of a kind
    if category == "four of a kind":
        for count in counts:
            if count >= 4:
                return sum(dice)
        return 0
    
    # Check for three of a kind
    if category == "three of a kind":
        for count in counts:
            if count >= 3:
                return sum(dice)
        return 0
    
    # Check for two pairs
    if category == "two pairs":
        pairs = 0
        for count in counts:
            if count >= 2:
                pairs += 1
        if pairs == 2:
            return sum(dice)
        return 0
    
    # Check for a pair
    if category == "pair":
        for count in counts:
            if count >= 2:
                return sum(dice)
        return 0
    
    # Sum the values of the dice
    return sum([die for die in dice if die == CATEGORIES[category]])

# Play a game of Yatzy
def play_game():
    # Roll the dice
    dice = [random.randint(1, DIE_FACES)]