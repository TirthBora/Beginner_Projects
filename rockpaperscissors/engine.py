function enhanced_A_star(grid, start, goal):
    open_list = PriorityQueue()
    open_list.put(start, 0)
    g_score = {start: 0}
    came_from = {}

    while not open_list.empty():
        current = open_list.get()

        if current == goal:
            return reconstruct_path(came_from, current)

        for neighbor in get_neighbors(current):
            if grid[neighbor] == "obstacle":
                continue
            tentative_g = g_score[current] + cost(current, neighbor)

            if neighbor not in g_score or tentative_g < g_score[neighbor]:
                came_from[neighbor] = current
                g_score[neighbor] = tentative_g
                f_score = tentative_g + heuristic(neighbor, goal)
                open_list.put(neighbor, f_score)

        if YOLO_update_detected():
            changed_cells = get_changed_cells()
            invalidate(changed_cells)
            partial_replan(grid, current, goal, changed_cells)

    return None
